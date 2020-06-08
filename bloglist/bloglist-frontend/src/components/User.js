import React from 'react'
import ListOfBlogs from './ListOfBlogs'

const User = ({ user }) => {
  return user
    ? <div>
        <h2>{user.name}</h2>
        <h3>added blogs</h3>
        <ListOfBlogs blogs={user.blogs} />
      </div>
    : null    
}

export default User