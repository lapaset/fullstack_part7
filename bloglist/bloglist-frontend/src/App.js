import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router,
  Switch, Route, Link, useParams } from "react-router-dom"

import BlogView from './components/BlogView'
import LoginForm from './components/LoginForm'
import ErrorField from './components/ErrorField'
import NotificationField from './components/NotificationField'
import Users from './components/Users'
import Blog from './components/Blog'

import { initBlogs } from './reducers/blogReducer'
import { loginUser } from './reducers/loginReducer'
import { initUsers } from './reducers/usersReducer'


const User = ({ users }) => {
  const id = useParams().id
  const user = users.find(u => u.id === id)

  return user
    ? <div>
        <h2>{user.name}</h2>
        <h3>added blogs</h3>
        <ul>
          {user.blogs.map(b =>
            <li key={b.id}>
              <Link to={`/blogs/${b.id}`}>{b.title} by {b.author}</Link>
            </li>)}
        </ul>
      </div>
    : null
}

const App = () => {
  const padding = {
    padding: 5
  }

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

  return (
    <Router>
      
      <div>
        <Link style={padding} to="/">blogs</Link>
        <Link style={padding} to="/users">users</Link>
      </div>

      <h1>Bloglist</h1>

      <ErrorField />
      <NotificationField />

      <Switch>
        <Route path="/blogs/:id">
          <Blog blogs={store.blogs}/>
        </Route>
        <Route path="/users/:id">
          <User users={store.users} />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          {store.user === null
            ? <LoginForm />
            : <BlogView
                user={store.user}
                createFormRef={createFormRef}  
              />
          }
        </Route>
      </Switch>

    </Router>
  )
}

export default App