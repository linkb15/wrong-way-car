import App from './App'
import './index.css'

import '@fontsource/saira/300.css'
import '@fontsource/saira/400.css'
import '@fontsource/saira/500.css'
import '@fontsource/saira/700.css'
import '@fontsource/saira/800.css'
import '@fontsource/saira/900.css'

import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>
)
