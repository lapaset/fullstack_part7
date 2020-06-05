import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserView from './components/UserView'
import LoginForm from './components/LoginForm'
import ErrorField from './components/ErrorField'
import NotificationField from './components/NotificationField'
import blogService from './services/blogs'
import { setNotification } from './reducers/notificationReducer'
import { initBlogs } from './reducers/blogReducer'
import { loginUser, logoutUser } from './reducers/userReducer'

const App = () => {
  const user = useSelector(s => s.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initBlogs()) 
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(loginUser(user))
      blogService.setToken(user.token)
      console.log('user set at restart:', user)
    }
  }, [dispatch])
  
  const handleLogout = async event => {
    event.preventDefault()

    window.localStorage.removeItem('loggedBloglistUser')
    dispatch(logoutUser())
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
        ? <LoginForm />
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