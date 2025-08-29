import { ListItemProps } from './index'

export interface ContextDrawerProps {
  toggleDrawer: () => void
  isOpen: boolean
  useDefineOptions: (item: ListItemProps[]) => void
  drawerListOptions: ListItemProps[] | null
}
