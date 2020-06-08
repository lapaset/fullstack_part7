import React from 'react'
import { useDispatch } from 'react-redux'
import { commentBlog } from '../reducers/blogReducer'
import { useField } from '../hooks/hooks'

const CommentForm = ({ blog }) => {
  const dispatch = useDispatch()

  const { reset: resetComment, ...comment } = useField('text')

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(commentBlog(blog, comment.value))
    resetComment()
  }

  return (
  <form onSubmit={handleSubmit}>
    <input { ...comment } />
    <button type="submit">add comment</button>
  </form>
)}

export default CommentForm