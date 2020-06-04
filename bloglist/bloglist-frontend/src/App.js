import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import UserView from './components/UserView'
import LoginForm from './components/LoginForm'
import ErrorField from './components/ErrorField'
import NotificationField from './components/NotificationField'
import blogService from './services/blogs'
import loginService from './services/login'
import { setNotification } from './reducers/notificationReducer'
import { initBlogs } from './reducers/blogReducer'

const App = () => {
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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

  const displayError = message => {
    setNotification(null)
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

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
      displayError('Invalid username or password')
    }
  }
  
  const handleLogout = async event => {
    event.preventDefault()

    window.localStorage.removeItem('loggedBloglistUser')
    setUser(null)
    dispatch(setNotification('Logged out'))
  }

  const createFormRef = React.createRef()

  
  /* notifications need to be handled
  const addBlog = async (blogObject) => {
    createFormRef.current.toggleVisibility()
    try {
      await blogService.createBlog(blogObject)
      dispatch(setNotification(`A new blog ${blogObject.title} by ${blogObject.author} added`))

    } catch (exception) {
      const error = exception.response.data.error

      if (error.includes('`title` is required') && error.includes('`url` is required'))
        displayError('title and url are missing')
      else if (error.includes('`title` is required'))
        displayError('title is missing')
      else if (error.includes('`url` is required'))
        displayError('url is missing')
      else
        displayError(error)
    }
  }*/


  //needs to be redux
  const addLike = async (id, blogObject) => {
    try {
      await blogService.updateBlog(id, blogObject)
    } catch (exception) {
      setErrorMessage('failed to like')
      console.log(exception)
    }
  }

  //needs to be redux
  const deleteBlog = async (id) => {
    try {
      await blogService.deleteBlog(id)
      dispatch(setNotification('blog was removed'))
    } catch (exception) {
      setErrorMessage('failed to delete blog')
      console.log(exception)
    }
  }

  return (
    <main>
      <h1>Bloglist</h1>

      {console.log('rendering start')}
      <ErrorField
        message={errorMessage}
      />

      <NotificationField />

      {user === null
        ? <LoginForm
            handleLogin={handleLogin}
          />
        : <UserView
            user={user}
            handleLogout={handleLogout}
            createFormRef={createFormRef}
            addLike={addLike}
            deleteBlog={deleteBlog}   
          />
      }
      {console.log('rendering end')}
    </main>
  )
}

export default App