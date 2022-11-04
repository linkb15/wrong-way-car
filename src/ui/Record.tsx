import { Box, Stack, Typography } from '@mui/material'

export const Record = () => {
  return (
    <Stack
      sx={{
        background: 'rgba(16, 12, 74, 0.2)',
        boxShadow: 'inset 0px 4px 63px rgba(255, 255, 255, 0.25)',
        borderRadius: '12px',
        color: '#fff',
      }}>
      <Stack
        direction='row'
        justifyContent={'space-between'}
        sx={{
          padding: '20px',
          background:
            'radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(255, 255, 255, 0.19) 0%, rgba(24, 20, 53, 0.26) 71.87%), #9747FF',
          boxShadow: 'inset 0px 4px 12px #FFFFFF',
          borderRadius: '12px 12px 0px 0px',
        }}>
        <Stack dir='column' spacing={1}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: 40,
              lineHeight: '36px',
              // border: '4px solid',
              WebkitTextStroke:
                '4px linear-gradient(180deg, #321F62 0%, rgba(50, 31, 98, 0) 100%)',
              backgroundColor: 'white',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            3:44
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 12,
              lineHeight: '12px',
            }}>
            Your Last record
          </Typography>
        </Stack>
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: '17px 8px',
            gap: '2px',
            background:
              'radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(78, 32, 130, 0.16) 0%, rgba(12, 12, 76, 0.16) 71.87%), #131444',
            borderRadius: 44,
          }}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: 14,
              lineHeight: '22px',
            }}>
            # 144th
          </Typography>
          <Typography
            sx={{
              fontSize: 9,
              lineHeight: '9px',
            }}>
            from 15k
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        {[0, 0, 0, 0, 0].map((_, i) => (
          <Stack
            key={i}
            direction={'row'}
            justifyContent='space-between'
            alignItems={'center'}
            sx={{
              padding: '0px 0px 0px 16px',
              borderBottom: '1px solid rgba(130, 75, 244, 0.08)',
            }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 12,
                lineHeight: '19px',
              }}>
              Miracle Levin
            </Typography>
            <Stack direction={'row'}>
              <Stack bgcolor='#261B50' spacing={'2px'} padding='2px 9px'>
                <Typography
                  sx={{
                    color: 'rgba(255, 251, 251, 0.7)',
                    fontWeight: 400,
                    fontSize: 9,
                    lineHeight: '9px',
                  }}>
                  Record
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: 20,
                    lineHeight: '20px',
                  }}>
                  2:44
                </Typography>
              </Stack>
              <Stack
                sx={{
                  bg: '#120837',
                  padding: '4px 9px 2px',
                  spacing: '2px',
                }}>
                <Typography
                  sx={{
                    color: 'rgba(255, 251, 251, 0.7)',
                    fontWeight: 400,
                    fontSize: 9,
                    lineHeight: '9px',
                  }}>
                  Rank
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: 20,
                    lineHeight: '20px',
                    span: {
                      fontSize: 10,
                    },
                  }}>
                  1<span>st</span>
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
