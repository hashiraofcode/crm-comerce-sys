import { Button } from '@mui/material'
import { AppThemeContext } from '@/Context/themeContext'

export const Home = () => {
  const { toggleTheme } = AppThemeContext()
  return (
    <>
      <Button
        onClick={() => {
          toggleTheme()
        }}
      >
        Toogle Theme
      </Button>
    </>
  )
}
