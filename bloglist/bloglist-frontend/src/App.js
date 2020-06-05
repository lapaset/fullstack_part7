import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import UserView from './components/UserView'
import LoginForm from './components/LoginForm'
import ErrorField from './components/ErrorField'
import NotificationField from './components/NotificationField'
import blogService from './services/blogs'
import loginService from './services/login'
import { setNotification } from './reducers/notificationReducer'
import { setErrorMessage } from './reducers/errorMessageReducer'
import { initBlogs } from './reducers/blogReducer'

const App = () => {
  const [user, setUser] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initBlogs()) 
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
      console.log('user set at restart:', user)
    }
  }, [])

  const handleLogin = async userObject => {
    try {
      const user = await loginService.login(userObject)

      window.localStorage.setItem(
        'loggedBloglistUser', JSON.stringify(user)
      )
      setUser(user)
      blogService.setToken(user.token)
      dispatch(setNotification(`Logged in as ${user.username}`))

    } catch {
      dispatch(setErrorMessage('Invalid username or password'))
    }
  }
  
  const handleLogout = async event => {
    event.preventDefault()

    window.localStorage.removeItem('loggedBloglistUser')
    setUser(null)
    dispatch(setNotification('Logged out'))
  }

  const createFormRef = React.createRef()

  return (
    <main>
      <h1>Bloglist</h1>

      {console.log('rendering start')}
      <ErrorField />
      <NotificationField />

      {user === null
        ? <LoginForm
            handleLogin={handleLogin}
          />
        : <UserView
            user={user}
            handleLogout={handleLogout}
            createFormRef={createFormRef}  
          />
      }
      {console.log('rendering end')}
    </main>
  )
}

export default App