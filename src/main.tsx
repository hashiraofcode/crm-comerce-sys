import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { DrawerProvider, ThemeAppProvider } from './Context/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeAppProvider>
      <DrawerProvider>
        <App />
      </DrawerProvider>
    </ThemeAppProvider>
  </StrictMode>,
)
