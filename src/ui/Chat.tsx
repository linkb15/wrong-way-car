import { Button, Stack, TextField, Typography } from '@mui/material'

export const Chat = () => {
  return (
    <Stack
      spacing={'29px'}
      sx={{
        color: 'white',
      }}>
      <Stack
        sx={{
          padding: '16px 16px 0px',

          background: '#180C3C',
          borderRadius: '16px',
        }}>
        <Typography>Nazanin Has Joind the Game</Typography>
        <Typography>Skylar Baptosta: how you doing mate</Typography>
        <Typography>Wilson Rosser: Not bad</Typography>
        <Typography>Ahmad Dias: did you win last round</Typography>
        <Typography>Skylar Baptosta: yes, headed for 2:30</Typography>
        <Typography>Livia: wow Cool!</Typography>
        <Typography>The Game Start in 6...</Typography>
      </Stack>

      <Stack width='100%' direction={'row'} spacing={2}>
        <TextField
          sx={{
            width: '100%',

            background: '#180C3C',
            borderRadius: 4,
          }}
        />
        <Button
          sx={{
            padding: '10px 37px',
            color: 'white',
            background:
              'linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)',
          }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: 18,
              lineHeight: '20px',
            }}>
            Send
          </Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
