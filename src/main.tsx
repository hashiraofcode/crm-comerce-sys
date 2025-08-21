import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeAppProvider } from './Context/themeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeAppProvider>
      <App />
    </ThemeAppProvider>
  </StrictMode>,
)
