// HOOKS
//import { useState } from 'react'
//TYPES
import type { ChildrenType } from '@/types'
import { type ReactNode } from 'react'
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
} from '@mui/material'
import { useTheme } from '@mui/material'

export const SideBarMenu = ({ children }: ChildrenType): ReactNode => {
  const theme = useTheme()

  return (
    <>
      <Drawer variant="permanent">
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
      <Box minHeight={'100dvh'} marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
