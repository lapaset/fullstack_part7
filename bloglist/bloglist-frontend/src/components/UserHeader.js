import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/loginReducer'
import { setNotification } from '../reducers/notificationReducer'

const UserHeader = ({ user }) => {
  const dispatch = useDispatch()

  const handleLogout = event => {
    event.preventDefault()

    window.localStorage.removeItem('loggedBloglistUser')
    dispatch(logoutUser())
    dispatch(setNotification('Logged out'))
  }
  
  return (
  <header>
    Logged in as {user.name}
    <button onClick={handleLogout}>Log out</button>
  </header>
)}

export default UserHeader