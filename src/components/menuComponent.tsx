// CONTEXT
import { useDrawer } from '@/utils/index'
//TYPES
import type { ChildrenType } from '@/types'
//HOOKS
import { useRef, type ReactNode, useEffect } from 'react'
//MUI
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material'
//COMPONENTS
import { ListItemLink } from './index'

export const SideBarMenu = ({ children }: ChildrenType): ReactNode => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const DrawerOptions = useDrawer()
  const firstOption = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (DrawerOptions?.isOpen && firstOption.current) {
      firstOption.current.focus()
    }
  }, [DrawerOptions?.isOpen])

  return (
    <>
      <Drawer
        open={DrawerOptions?.isOpen}
        onClose={() => DrawerOptions?.toggleDrawer()}
        variant={smDown ? 'temporary' : 'permanent'}
        ref={firstOption}
      >
        <Box
          width={theme.spacing(28)}
          height={'100%'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box
            sx={{
              width: '100%',
              height: theme.spacing(17),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav" aria-label="Menu de navegação">
              {DrawerOptions?.drawerListOptions?.map((link, index) => (
                <ListItemLink
                  key={index}
                  icon={link.icon}
                  label={link.label}
                  to={link.to}
                  onClick={smDown ? DrawerOptions?.toggleDrawer : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box minHeight={'100dvh'} marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
