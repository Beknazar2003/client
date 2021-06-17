import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button'

const LogOut = () => {
  const auth = useContext(AuthContext)

  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
  }

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={logoutHandler}
      style={{ margin: 15 }}
    >
      <ExitToAppIcon />
    </Button>
  )
}
export default LogOut
