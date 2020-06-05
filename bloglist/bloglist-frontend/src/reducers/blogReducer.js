import blogService from '../services/blogs'
import { setNotification } from '../reducers/notificationReducer'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.blogs
    case 'ADD':
      return [...state, action.newBlog]
    default:
      return state
  }
}

export const initBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT',
      blogs
    })
  }
}

export const addBlog = blog => {
  const displayError = error => console.log(error)

  return async dispatch => {
    try {
      const newBlog = await blogService.createBlog(blog)
      console.log('newBlog', newBlog)
      dispatch({
        type: 'ADD',
        newBlog
      })
      dispatch(setNotification(`A new blog ${blog.title} by ${blog.author} added`))
    } catch (e) {
      const error = e.response.data.error

      if (error.includes('`title` is required') && error.includes('`url` is required'))
        displayError('title and url are missing')
      else if (error.includes('`title` is required'))
        displayError('title is missing')
      else if (error.includes('`url` is required'))
        displayError('url is missing')
      else
        displayError(error)
    }
  }
}

export default blogReducer