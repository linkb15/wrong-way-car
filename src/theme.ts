import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: '"Saira", sans-serif',
  },
  breakpoints: {
    values: {
      // extra-small
      xs: 0,
      // small
      sm: 600,
      // medium
      md: 900,
      // large
      lg: 1120,
      // extra-large
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
