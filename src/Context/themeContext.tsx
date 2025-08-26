// HOOKS
import { createContext, useContext, useEffect, useState } from 'react'

// MATERIAL UI
import { Box, ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
//THEMES
import { darkTheme, lightTheme } from '@/themes'
//TYPES
import type { ThemeContext, ChildrenType } from '@/types'

export const ThemeAppContext = createContext<ThemeContext | null>(null)

export const AppThemeContext = () => {
  const context = useContext(ThemeAppContext)
  if (!context) {
    throw new Error('contexto do tema com problema')
  }
  return context
}

export const ThemeAppProvider = ({ children }: ChildrenType) => {
  const [selectedTheme, setSelecteTheme] = useState<string | null>(null)

  useEffect(() => {
    setSelecteTheme(localStorage.getItem('theme') ?? 'light')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', selectedTheme ?? 'light')
  }, [selectedTheme])

  const toggleTheme = () => {
    setSelecteTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light'
    })
  }

  const BgAppColor = (themeOption: string | null): string => {
    const lightColor = lightTheme?.palette.background.default
    const darkColor = darkTheme?.palette.background.default
    return (themeOption ?? 'light') === 'light' ? lightColor : darkColor
  }

  return (
    <ThemeAppContext.Provider value={{ toggleTheme, selectedTheme }}>
      <ThemeProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        <Box
          width="100dvw"
          maxWidth="100%"
          minHeight="100dvh"
          bgcolor={BgAppColor(selectedTheme)}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeAppContext.Provider>
  )
}
