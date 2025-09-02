import { ThemeAppContext } from '@/Context'
import { useContext } from 'react'

export const useAppTheme = () => {
  const context = useContext(ThemeAppContext)
  if (!context) {
    throw new Error('contexto do tema com problema')
  }
  return context
}
