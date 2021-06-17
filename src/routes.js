import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Documents from './pages/Documents'
import Registration from './pages/Registration'

export const useRoutes = (isAuthenticated, isAdmin = false) => {
  if (isAdmin) {
    return (
      <Switch>
        <Route path="/" exact>
          <Documents />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Route path="/registration" exact>
        <Registration />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  )
}
