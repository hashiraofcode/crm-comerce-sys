// CONTEXT
import { useAppTheme, useDrawer } from '@/hooks/index'
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
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
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
  const Focus = useRef<HTMLDivElement | null>(null)
  const themeContext = useAppTheme()

  useEffect(() => {
    if (DrawerOptions?.isOpen && firstOption.current) {
      firstOption.current.focus()
    }
    if (!DrawerOptions?.isOpen && Focus.current) {
      Focus.current.focus()
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
          <Box>
            <List component="nav" sx={{ padding: 0 }}>
              <ListItemButton onClick={() => themeContext.toggleTheme()}>
                <ListItemIcon>
                  {themeContext.selectedTheme === 'light' ? (
                    <Icon sx={{ color: '#2e2e2e' }}>dark_mode</Icon>
                  ) : (
                    <Icon sx={{ color: '#e7e7e7' }}>light_mode</Icon>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ fontSize: '1rem' }}
                    >
                      Alternar tema
                    </Typography>
                  }
                />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box
        minHeight={'100dvh'}
        marginLeft={smDown ? 0 : theme.spacing(28)}
        ref={Focus}
      >
        {children}
      </Box>
    </>
  )
}
