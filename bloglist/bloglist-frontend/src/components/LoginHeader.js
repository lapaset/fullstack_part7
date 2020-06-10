import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../reducers/loginReducer'
import { setNotification } from '../reducers/notificationReducer'
import { LogoutButton } from './styledComponents'

const LoginHeader = ({ user, style }) => {
  const dispatch = useDispatch()

  const handleLogout = event => {
    event.preventDefault()

    window.localStorage.removeItem('loggedBloglistUser')
    dispatch(logoutUser())
    dispatch(setNotification('Logged out'))
  }
  
  return user
    ? <div>
        {user.name} logged in
        <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
      </div>
    : <Link style={style} to="/login">login</Link>
}

export default LoginHeader