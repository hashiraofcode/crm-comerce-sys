import { createTheme } from '@mui/material'
import { blue, green } from '@mui/material/colors'

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: green[400],
      light: green[300],
      dark: green[500],
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    secondary: {
      main: blue[600],
      light: blue[500],
      dark: blue[700],
      contrastText: '#fff',
    },
    background: {
      default: '#3f3f3fff',
      paper: '#464646ff',
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
