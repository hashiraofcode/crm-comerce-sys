//HOOKS
import { createContext, useState, type ReactNode } from 'react'

// TYPES
import type { ChildrenType, ContextDrawerProps, ListItemProps } from '@/types'

export const DrawerContext = createContext<ContextDrawerProps | null>(null)

export const DrawerProvider = ({ children }: ChildrenType): ReactNode => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [drawerListOptions, setDrawerListOptions] = useState<
    ListItemProps[] | null
  >(null)

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev)
  }

  const useDefineOptions = (items: ListItemProps[]) => {
    setDrawerListOptions(items)
  }

  return (
    <DrawerContext.Provider
      value={{ isOpen, toggleDrawer, useDefineOptions, drawerListOptions }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
