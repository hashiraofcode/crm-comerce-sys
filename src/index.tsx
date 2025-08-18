import { Routes, Route, Navigate } from 'react-router-dom'
// Páginas
import { Home } from '@/pages/index.ts'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Home />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
