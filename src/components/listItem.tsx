//TYPES
import type { ReactNode } from 'react'
import type { ListItemProps } from '@/types'
//COMPONENTS
import {
  ListItemButton,
  Icon,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material'
//HOOKS
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'

export const ListItemLink = ({
  icon,
  label,
  onClick,
  to,
}: ListItemProps): ReactNode => {
  const navigate = useNavigate()
  const location = useResolvedPath(to)
  const isMatch = useMatch({ path: location.pathname, end: true })

  const handelerClick = () => {
    navigate(to)
    onClick?.()
  }

  return (
    <ListItemButton onClick={handelerClick} selected={!!isMatch}>
      <ListItemIcon>
        <Icon color="primary">{icon}</Icon>
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography variant="h6" component="h2" sx={{ fontSize: '1rem' }}>
            {label}
          </Typography>
        }
      />
    </ListItemButton>
  )
}
