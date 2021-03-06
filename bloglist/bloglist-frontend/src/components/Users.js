import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from './styledComponents'

const Users = () => {
  const users = useSelector(s => s.users)
  return (
    <div>
      <h2>Users</h2>
      <Table striped>
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
      </Table>
    </div>
)}

export default Users