// CONTEXT
import { useDrawer } from '@/Context'
//TYPES AND HOOKS
import type { ChildrenType } from '@/types'
import { useRef, type ReactNode, useEffect } from 'react'
//MUI
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material'

export const SideBarMenu = ({ children }: ChildrenType): ReactNode => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const DrawerOptions = useDrawer()
  const firstOption = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (DrawerOptions && firstOption.current) {
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
              <ListItemButton>
                <ListItemIcon>
                  <Icon color="primary">home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página-Inicial" />
              </ListItemButton>
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
