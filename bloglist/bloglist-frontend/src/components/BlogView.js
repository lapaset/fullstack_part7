import React from 'react'
import ListOfBlogs from './ListOfBlogs'
import CreateBlogForm from './CreateBlogForm'
import Togglable from './Togglable'
import LoginHeader from './LoginHeader'

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
      <LoginHeader
        user={user} />

      {createForm()}
      
      <ListOfBlogs
        id="user-blogs"
        user={user} />
    </div>
)}

export default BlogView