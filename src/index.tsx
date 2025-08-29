import { Routes, Route, Navigate } from 'react-router-dom'
// Páginas
import { Home } from '@/pages/index.ts'
// CONTEXT
import { useDrawer } from '@/utils/index'
// TYPES
import type { ListItemProps } from './types'
import { useEffect } from 'react'

export const AppRoutes = () => {
  const DrawerOptions = useDrawer()
  useEffect(() => {
    const linkOptions: ListItemProps[] = [
      { icon: 'home', label: 'Página Inicial', to: '/pagina-inicial' },
      { icon: 'location_on', label: 'Cidades', to: '/cidades' },
    ]

    if (DrawerOptions) {
      DrawerOptions.useDefineOptions(linkOptions)
    }
  }, [])
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Home />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
