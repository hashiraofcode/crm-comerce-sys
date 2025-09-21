import { useContext } from 'react'
import { DrawerContext } from '@/Context'

export const useDrawer = () => {
  const object = useContext(DrawerContext)
  if (object) {
    return object
  } else {
    console.error('Erro no DrawerContext')
  }
}
