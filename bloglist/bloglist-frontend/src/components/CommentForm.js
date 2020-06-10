import React from 'react'
import { useDispatch } from 'react-redux'
import { commentBlog } from '../reducers/blogReducer'
import { useField } from '../hooks/hooks'
import { Input, Button } from './styledComponents'

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
    <Input { ...comment } />
    <Button type="submit">add comment</Button>
  </form>
)}

export default CommentForm