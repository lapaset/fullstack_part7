import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from './styledComponents'

const ListOfBlogs = ({ blogs }) => (
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
)

export default ListOfBlogs