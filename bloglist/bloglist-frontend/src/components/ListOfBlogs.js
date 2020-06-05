import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Blog from './Blog'
import { likeBlog, deleteBlog } from '../reducers/blogReducer'

const ListOfBlogs = ({ id, user }) => {

  const dispatch = useDispatch()

  const handleLike = blog => {
    dispatch(likeBlog(blog))
  }

  const handleDelete = blog => {
    dispatch(deleteBlog(blog))
  }

  const blogs = useSelector(s => s.blogs)
  return (
    <main>
      <h2>Blogs</h2>
      <ul id={id}>
        {blogs
          .sort((a, b) => b.likes - a.likes)
          .map(b =>
            <Blog
              key={b.id}
              blog={b}
              handleLike={() => handleLike(b)}
              deleteBlog={() => handleDelete(b)}
              user={user} />
          )}
      </ul>
    </main>
)}

export default ListOfBlogs