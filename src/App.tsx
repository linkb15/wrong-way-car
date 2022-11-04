import { useEffect, useRef, useState } from 'react'
import car from './assets/cars/car_center.png'
import road from './assets/road.png'
import sky from './assets/sky.png'
import explosionSpriteSheet from './assets/explosion_spritesheet.png'
import explosionSpriteSheetJson from './assets/explosion.json'

import MUIContainer from '@mui/material/Container'

import io from 'socket.io-client'
import { Stats } from './ui/Stats'

import * as PIXI from 'pixi.js'
import { Box } from '@mui/material'
import { Assets, Spritesheet, type ISpritesheetData } from 'pixi.js'
import { Record } from './ui/Record'
import { Chat } from './ui/Chat'
import { Players } from './ui/Players'

const socket = io('wss://wrongway-racer-api.spls.ae/')

// Create object to store sprite sheet data
const spriteWidth = 1120
const spriteHeight = 649
const explosionData: ISpritesheetData = {
  frames: {
    explosion1: {
      frame: { x: 0, y: 0, w: spriteWidth, h: spriteHeight },
      sourceSize: { w: spriteWidth, h: spriteHeight },
      spriteSourceSize: { x: 0, y: 0 },
    },
    enemy2: {
      frame: { x: spriteWidth, y: 0, w: spriteWidth, h: spriteHeight },
      sourceSize: { w: spriteWidth, h: spriteHeight },
      spriteSourceSize: { x: 0, y: 0 },
    },
    enemy3: {
      frame: { x: spriteWidth * 2, y: 0, w: spriteWidth, h: spriteHeight },
      sourceSize: { w: spriteWidth, h: spriteHeight },
      spriteSourceSize: { x: 0, y: 0 },
    },
    enemy6: {
      frame: { x: spriteWidth * 3, y: 0, w: spriteWidth, h: spriteHeight },
      sourceSize: { w: spriteWidth, h: spriteHeight },
      spriteSourceSize: { x: 0, y: 0 },
    },
  },
  meta: {
    scale: '1',
  },
  animations: {
    enemy: ['explosion1', 'enemy2', 'enemy3', 'enemy4', 'enemy5', 'enemy6'], //array of frames by name
  },
}

interface Player {
  name: string
  avatar: string
  record: number
  rank: number
  gamesPlayed: number
  worstRecord: number
  highestRank: number
}

function App() {
  const pixiParent = useRef<HTMLDivElement>(null)
  const [app, setApp] = useState<PIXI.Application>()
  const [players, setPlayers] = useState<Player[]>()
  const [newEnemy, setNewEnemy] = useState()
  const [newChat, setNewChat] = useState()
  const [newChatJoin, setNewChatJoin] = useState()

  useEffect(() => {
    socket.on('newEnemy', (value) => {
      setNewEnemy(value)
    })

    socket.on('newChatJoin', (value) => {
      setNewChatJoin(value)
    })

    socket.on('newChat', (value) => {
      setNewChat(value)
    })

    socket.on('players', (value) => {
      setPlayers(value)
    })

    return () => {
      socket.off('newEnemy')
      socket.off('newChat')
      socket.off('newChatJoin')
      socket.off('players')
    }
  }, [])

  useEffect(() => {
    const init = async () => {
      if (!pixiParent.current) {
        return
      }
      const app = new PIXI.Application({
        // width: 800,
        // height: 600,
        // backgroundColor: 0x1099bb,
        // resolution: window.devicePixelRatio || 1,
      })

      // Add a container to center our sprite stack on the page
      const container = new PIXI.Container()
      container.x = app.screen.width / 2
      container.y = app.screen.height / 2

      const skySprite = PIXI.Sprite.from(sky)
      skySprite.x = 0
      skySprite.y = 0
      skySprite.width = app.screen.width
      skySprite.height = app.screen.height
      app.stage.addChild(skySprite)

      const roadSprite = PIXI.Sprite.from(road)
      roadSprite.x = 0
      roadSprite.y = app.screen.height / 2
      roadSprite.width = app.screen.width
      roadSprite.height = app.screen.height
      app.stage.addChild(roadSprite)

      const carSprite = PIXI.Sprite.from(car)
      carSprite.x = app.screen.width / 2
      carSprite.y = app.screen.height / 2
      carSprite.scale.set(0.5)
      app.stage.addChild(carSprite)

      app.stop()
      const sheet = new Spritesheet(
        PIXI.BaseTexture.from(explosionSpriteSheet),
        explosionSpriteSheetJson
      )

      await sheet.parse()
      const explosion = new PIXI.AnimatedSprite(sheet.animations.test)
      explosion.x = app.screen.width
      explosion.y = app.screen.height / 2
      explosion.animationSpeed = 0.5
      explosion.anchor.set(0.5)
      explosion.scale.set(0.5)
      explosion.play()
      app.stage.addChild(explosion)
      app.start()

      pixiParent.current.replaceChildren(app.view as HTMLCanvasElement)
      setApp(app)
    }

    init()
  }, [])

  useEffect(() => {
    function resize() {
      if (!app) return
      const parent = app.view.parentNode as HTMLElement
      app.renderer.resize(parent.clientWidth - 32, parent.clientHeight)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [app])

  return (
    <Box
      sx={{
        py: 4,
        background: {
          xs: 'radial-gradient(101.35% 101.35% at 50% 22.11%, #4E2082 0%, #0C0C4C 71.87%), #131444',
          lg: 'linear-gradient(234.36deg, rgba(12, 12, 76, 0.5) 2.69%, rgba(6, 6, 6, 0) 43.67%), radial-gradient(168.67% 168.67% at 48.89% 54.41%, rgba(78, 32, 130, 0.5) 0%, rgba(12, 12, 76, 0.5) 71.88%), #080817',
        },
      }}>
      <Stats />
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <div>newEnemy: {newEnemy}</div>
      <pre>newChatJoin: {JSON.stringify(newChatJoin, null, 2)}</pre>
      <div>newChat: {newChat}</div>
      {/* <section>
        <h2>Player List</h2>
        <div className='flex flex-col gap-3'>
          {players?.map((player) => (
            <div className='flex gap-3 items-center' key={player.avatar}>
              <img
                src={player.avatar}
                alt=''
                className='w-5 h-5 rounded-full'
              />
              <div>Name: {player.name}</div>
              <div>Games Played: {player.gamesPlayed}</div>
              <div>Rank: {player.rank}</div>
              <div>Record: {player.record}</div>
              <div>Highest Rank: {player.highestRank}</div>
              <div>Worst Record: {player.worstRecord}</div>
            </div>
          ))}
        </div>
      </section> */}
      <MUIContainer maxWidth='xs'>
        <Record />
      </MUIContainer>
      <MUIContainer maxWidth='xs'>
        <Chat />
      </MUIContainer>
      <MUIContainer maxWidth='xs'>
        <Players />
      </MUIContainer>
      <MUIContainer
        ref={pixiParent}
        maxWidth='lg'
        disableGutters
        sx={{
          minWidth: '342px',
          minHeight: '198px',
          maxHeight: '649px',
          aspectRatio: '16/9',
          px: '16px',
          height: '100%',
          canvas: {
            borderRadius: '20px',
            filter: 'drop-shadow(0px 4px 90px #542899)',
          },
        }}>
        <canvas />
      </MUIContainer>
    </Box>
  )
}

export default App
