import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
