import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'

const ListOfBlogs = ({ id, addLike, deleteBlog, user }) => {
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
              addLike={addLike}
              deleteBlog={deleteBlog}
              user={user} />
          )}
      </ul>
    </main>
)}

export default ListOfBlogs