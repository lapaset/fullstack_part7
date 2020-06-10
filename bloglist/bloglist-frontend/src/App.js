import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch,
  Switch, Route } from "react-router-dom"

import BlogView from './components/BlogView'
import LoginForm from './components/LoginForm'
import ErrorField from './components/ErrorField'
import NotificationField from './components/NotificationField'
import Users from './components/Users'
import Blog from './components/Blog'
import User from './components/User'
import Header from './components/Header'
import { Page } from './components/styledComponents'

import { initBlogs } from './reducers/blogReducer'
import { loginUser } from './reducers/loginReducer'
import { initUsers } from './reducers/usersReducer'

const App = () => {
  const store = useSelector(s => s)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initBlogs()) 
  }, [dispatch])

  useEffect(() => {
    dispatch(initUsers())
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if (loggedUserJSON) {
      const userToLogIn = JSON.parse(loggedUserJSON)
      dispatch(loginUser(userToLogIn, false))
      console.log('user set at restart:', userToLogIn)
    }
  }, [dispatch])

  const createFormRef = React.createRef()

  const blogMatch = useRouteMatch('/blogs/:id')
  const blog = blogMatch
    ? store.blogs.find(b => b.id === blogMatch.params.id)
    : null

  const userMatch = useRouteMatch('/users/:id')
  const user = userMatch
    ? store.users.find(u => u.id === userMatch.params.id)
    : null
  

  return (
    <Page>
      <Header user={store.user} />

      <h1>Bloglist</h1>

      <ErrorField />
      <NotificationField />

      <Switch>
        <Route path="/blogs/:id">
          <Blog blog={blog}/>
        </Route>
        <Route path="/users/:id">
          <User user={user} />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          {store.user
            ? <BlogView
                user={store.user}
                createFormRef={createFormRef}  
              />
            : <LoginForm />
          }
        </Route>
      </Switch>
    </Page>
  )
}

export default App