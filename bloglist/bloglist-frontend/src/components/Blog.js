import React from 'react'
import { useDispatch } from 'react-redux'
import { likeBlog } from '../reducers/blogReducer'
import Comments from './Comments'


const Blog = ({ blog }) => {

  /*const handleDelete = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`))
    deleteBlog(blog.id)
  }

  const removeButton = () => (
    <button id="remove-blog-button" onClick={handleDelete}>remove</button>
  )*/
  
  const dispatch = useDispatch()
  const handleLike = blog => {
    dispatch(likeBlog(blog))
  }

  const likeButton = () => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    return loggedUserJSON
    ? <button onClick={() => handleLike(blog)}>like</button>
    : null
  }

  return blog
    ? <div>
        <h2>{blog.title} by {blog.author}</h2>
        <p>
          <a href={blog.url} title={blog.title}>{blog.url}</a><br />
          {blog.likes} likes
          {likeButton()}<br />
          added by {blog.user.name}
        </p>
        <Comments blog={blog} />
      </div>
    : null
}

export default Blog