import blogService from '../services/blogs'
import { setNotification } from '../reducers/notificationReducer'
import { setErrorMessage } from '../reducers/errorMessageReducer'

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
        dispatch(setErrorMessage('title and url are missing'))
      else if (error.includes('`title` is required'))
        dispatch(setErrorMessage('title is missing'))
      else if (error.includes('`url` is required'))
        dispatch(setErrorMessage('url is missing'))
      else
        dispatch(setErrorMessage(error))
    }
  }
}

export default blogReducer