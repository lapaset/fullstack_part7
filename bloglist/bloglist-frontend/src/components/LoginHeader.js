import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../reducers/loginReducer'
import { setNotification } from '../reducers/notificationReducer'

const LoginHeader = ({ user, style }) => {
  const dispatch = useDispatch()

  const handleLogout = event => {
    event.preventDefault()

    window.localStorage.removeItem('loggedBloglistUser')
    dispatch(logoutUser())
    dispatch(setNotification('Logged out'))
  }
  
  return user
    ? <span>
        {user.name} logged in
        <button onClick={handleLogout}>Log out</button>
      </span>
    : <Link style={style} to="/login">login</Link>
}

export default LoginHeader