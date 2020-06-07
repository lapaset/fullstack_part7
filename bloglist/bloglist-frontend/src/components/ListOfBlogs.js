import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
//import { likeBlog, deleteBlog } from '../reducers/blogReducer'

const ListOfBlogs = ({ id, user }) => {

  /*const dispatch = useDispatch()

  const handleDelete = blog => {
    dispatch(deleteBlog(blog))
  }*/

  const blogs = useSelector(s => s.blogs)
  console.log(blogs)
  return (
    <main>
      <h2>Blogs</h2>
      <ul id={id}>
        {blogs
          .sort((a, b) => b.likes - a.likes)
          .map(b =>
            <li key={b.id}>
              <Link to={`/blogs/${b.id}`}>{b.title} by {b.author}</Link>
            </li>
          )}
      </ul>
    </main>
)}

export default ListOfBlogs