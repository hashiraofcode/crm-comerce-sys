export interface Theme {
  palette: {
    primary: {
      main: string
      light: string
      dark: string
      contrastText: string
    }
    secondary: {
      main: string
      light: string
      dark: string
      contrastText: string
    }
    background: {
      default: string
      paper: string
    }
  }
  typography: {
    fontFamily: string
    fontWeightLight: number
    fontWeightBold: number
    fontWeightMedium: number
    fontWeightRegular: number
  }
}

export interface ThemeContext {
  toggleTheme: () => void
  selectedTheme: string | null
}
