import React from 'react'
import { useDispatch } from 'react-redux'
import { likeBlog, commentBlog } from '../reducers/blogReducer'
import { useField } from '../hooks/hooks'
import shortid from 'shortid'

const Comments = ({ blog }) => {
  const dispatch = useDispatch()

  const { reset: resetComment, ...comment } = useField('text')

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(commentBlog(blog, comment.value))
    resetComment()
  }

  return (
    <div>
      <h3>comments</h3>
      <form onSubmit={handleSubmit}>
        <input { ...comment } />
        <button type="submit">add comment</button>
      </form>
      {blog
        ? <ul>
            {blog.comments.map(c =>
              <li key={shortid.generate()}>{c}</li>
            )}
          </ul>
        : null
      }
    </div>
  )
}

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