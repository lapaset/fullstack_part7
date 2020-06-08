import blogService from '../services/blogs'
import { setNotification } from '../reducers/notificationReducer'
import { setErrorMessage } from '../reducers/errorMessageReducer'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [...state, action.newBlog]
    case 'LIKE_BLOG': {
      const id = action.blog.id
      const blogToChange = state.find(b => b.id === id)
      const changedBlog = {
        ...blogToChange,
        likes: blogToChange.likes + 1
      }
      return state
        .map(b => b.id !== id ? b : changedBlog)
    }
    case 'DELETE_BLOG': {
      const id = action.blog.id
      return state.filter(b => b.id !== id)
    }
    case 'ADD_COMMENT': {
      const id = action.blog.id
      const blogToChange = state.find(b => b.id === id)
      const changedBlog = {
        ...blogToChange,
        comments: action.blog.comments
      }
      return state
        .map(b => b.id !== id ? b : changedBlog)
    }
    default:
      return state
  }
}

export const initBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()

    dispatch({
      type: 'INIT_BLOGS',
      blogs
    })
  }
}

export const addBlog = blog => {
  return async dispatch => {
    try {
      const newBlog = await blogService.createBlog(blog)

      dispatch({
        type: 'ADD_BLOG',
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

export const likeBlog = blog => {
  return async dispatch => {
    try {
      const updatedBlog = await blogService.updateBlog({
        ...blog,
        likes: blog.likes + 1
      })

      dispatch({
        type: 'LIKE_BLOG',
        blog: updatedBlog
      })

      dispatch(setNotification(`Liked blog ${blog.title}`))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteBlog = blog => {
  return async dispatch => {
    try {
      await blogService.deleteBlog(blog.id)

      dispatch({
        type: 'DELETE_BLOG',
        blog
      })
      
      dispatch(setNotification(`Blog ${blog.title} was removed`))
    } catch (error) {
      console.log(error)
    }
  }
}

export const commentBlog = (blog, newComment) => {
  return async dispatch => {
    try {
      const updatedBlog = await blogService.addComment(blog.id, newComment)
      console.log(updatedBlog)

      dispatch({
        type: 'ADD_COMMENT',
        blog: updatedBlog
      })
      
    } catch (error) {
      console.log(error)
    }
  }
}

export default blogReducer