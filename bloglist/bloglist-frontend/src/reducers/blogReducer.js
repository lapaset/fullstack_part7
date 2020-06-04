import blogService from '../services/blogs'

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
    const newBlog = await blogService.createBlog(blog)
    dispatch({
      type: 'ADD',
      newBlog
    })
  }
}

export default blogReducer