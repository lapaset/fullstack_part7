import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { likeBlog } from '../reducers/blogReducer'


const Blog = ({ blogs }) => {

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

  const id = useParams().id
  const blog = blogs.find(b => b.id === id)

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
      </div>
    : null
}

export default Blog

