import { createTheme } from '@mui/material'
import { blue, green } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: green[400],
      light: green[200],
      dark: green[500],
      contrastText: 'rgba(240, 240, 240, 1)',
    },
    secondary: {
      main: blue[600],
      light: blue[400],
      dark: blue[700],
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
      paper: '#d1d1d1ff',
    },
  },
  typography: {
    fontFamily: ['Inter,Roboto,Arial,Helvetica, Sans-serif'].join(','),
    fontWeightLight: 200,
    fontWeightBold: 500,
    fontWeightMedium: 400,
    fontWeightRegular: 300,
  },
})
