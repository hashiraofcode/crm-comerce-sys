// Rotas
import { BrowserRouter as Router } from 'react-router-dom'
import { SideBarMenu } from './components'
import { AppRoutes } from '.'

function App() {
  return (
    <Router>
      <SideBarMenu>
        <AppRoutes />
      </SideBarMenu>
    </Router>
  )
}

export default App
