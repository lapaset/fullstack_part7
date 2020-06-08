import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ListOfBlogs = () => {

  /*const dispatch = useDispatch()

  const handleDelete = blog => {
    dispatch(deleteBlog(blog))
  }*/

  const blogs = useSelector(s => s.blogs)

  return (
    <main>
      <h2>Blogs</h2>
      <Table striped>
        <tbody>
        {blogs
          .sort((a, b) => b.likes - a.likes)
          .map(b =>
            <tr key={b.id}>
              <td>
                <Link to={`/blogs/${b.id}`}>{b.title} by {b.author}</Link>
              </td>
            </tr>
          )}
          </tbody>
      </Table>
    </main>
)}

export default ListOfBlogs