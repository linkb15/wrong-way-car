import { Avatar, Box, Button, Stack, Typography } from '@mui/material'

export const Players = () => {
  return (
    <Stack
      spacing='11px'
      sx={{
        background: 'rgba(16, 12, 74, 0.2)',
        boxShadow: 'inset 3px 4px 63px rgba(255, 255, 255, 0.25)',
        borderRadius: '12px',
        pb: '15px',
      }}>
      <Stack
        sx={{
          background:
            'radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(34, 21, 49, 0.5) 0%, rgba(22, 22, 48, 0.5) 71.87%), rgba(19, 20, 68, 0.5)',
          borderRadius: '12px 12px 0px 0px',

          padding: '4px 16px',
        }}
        direction={'row'}
        justifyContent='space-between'>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 16,
            lineHeight: '21px',
            color: 'white',
          }}>
          Players
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 16,
            lineHeight: '21px',
            color: 'white',
          }}>
          8/12
        </Typography>
      </Stack>
      <Stack px='22px'>
        <Button>Setting</Button>
      </Stack>
      <Stack spacing='8px' px='16px'>
        {[0, 0, 0, 0, 0, 0, 0].map((_, i) => (
          <Stack key={i} direction={'row'} spacing='8px'>
            <Avatar
              sx={{
                width: '24px',
                height: '24px',
              }}></Avatar>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '22px',
                color: 'white',
              }}>
              Skylar Baptista
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
