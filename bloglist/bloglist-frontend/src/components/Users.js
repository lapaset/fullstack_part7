import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

//make this a table with links to blogs

const Users = () => {
  const users = useSelector(s => s.users)
  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>blogs created</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
)}

export default Users