import React from 'react'
import ListOfBlogs from './ListOfBlogs'
import CreateBlogForm from './CreateBlogForm'
import Togglable from './Togglable'
import UserHeader from './UserHeader'

const BlogView = ({ user, createFormRef }) => {

    const createForm = () => (
      <Togglable
        buttonId={'new-note-button'}
        buttonLabel={'new note'} 
        closeButtonLabel={'cancel'}
        ref={createFormRef} >
          <CreateBlogForm />
      </Togglable>
    )

    return (
    <div>
      <UserHeader
        user={user} />

      {createForm()}
      
      <ListOfBlogs
        id="user-blogs"
        user={user} />
    </div>
)}

export default BlogView