import { BrowserRouter } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { useRoutes } from './routes'
import { AuthContext } from './context/AuthContext'
import { Container } from '@material-ui/core'
import LogOut from './LogOut'

function App() {
  const { token, login, logout, userId, userRole, ready } = useAuth()
  const isAuthenticated = !!token
  const isAdmin = userRole === 'Admin'

  const routes = useRoutes(isAuthenticated, isAdmin)

  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, userRole, ready }}
    >
      <div className="App">
        <LogOut />
        <Container>
          <BrowserRouter>{routes}</BrowserRouter>
        </Container>
      </div>
    </AuthContext.Provider>
  )
}

export default App
