import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => (
  <div>
    <h2>{user.name}</h2>
    <h3>added blogs</h3>
    <ul>
      {user.blogs.map(b =>
        <li key={b.id}>
          <Link to={`/blogs/${b.id}`}>{b.title} by {b.author}</Link>
        </li>)}
    </ul>
  </div>
)

export default User