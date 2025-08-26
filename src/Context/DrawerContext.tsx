//HOOKS
import { createContext, useContext, useState, type ReactNode } from 'react'

// TYPES
import type { ChildrenType, ContextDrawerProps } from '@/types'

export const DrawerContext = createContext<ContextDrawerProps | null>(null)

export const useDrawer = () => {
  const object = useContext(DrawerContext)
  if (object) return object
}

export const DrawerProvider = ({ children }: ChildrenType): ReactNode => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}
