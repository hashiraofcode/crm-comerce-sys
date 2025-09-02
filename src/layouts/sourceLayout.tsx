// TYPES
import type { SourceLayoutTypes } from '@/types'
import type { ReactNode } from 'react'
// MUI
import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
// HOOKS
import { useDrawer } from '@/hooks/index'

// INTERFACE
interface SourceLayout extends SourceLayoutTypes {
  children: ReactNode
}

export const SourceLayoutApp = ({
  children,
  titulo,
  toolBar,
}: SourceLayout) => {
  const theme = useTheme()
  const drawerOptions = useDrawer()
  const smDouwn = useMediaQuery(theme.breakpoints.down('sm'))
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      {/* {CONTAINER} */}
      <Box
        sx={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            padding: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
          height={
            smDouwn
              ? `${theme.spacing(4)}`
              : mdUp
                ? `${theme.spacing(12)}`
                : `${theme.spacing(6)}`
          }
        >
          <IconButton
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            onClick={drawerOptions?.toggleDrawer ?? (() => {})}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography
            variant={smDouwn ? 'h5' : mdUp ? 'h3' : 'h4'}
            sx={{
              fontWeight: 400,
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
            component="h1"
          >
            {titulo}
          </Typography>
          {/* TOOL'S BAR */}
        </Box>
        {toolBar && (
          <Box sx={{ padding: `0 ${theme.spacing(1)}` }}>{toolBar}</Box>
        )}
        {/* CONTENT */}
        <Box
          sx={{ flex: 1, overflow: 'auto', padding: `0 ${theme.spacing(1)}` }}
        >
          {children}
        </Box>
      </Box>
    </>
  )
}
