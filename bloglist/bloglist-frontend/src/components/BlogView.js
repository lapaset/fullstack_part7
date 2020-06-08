import React from 'react'
import ListOfBlogs from './ListOfBlogs'
import CreateBlogForm from './CreateBlogForm'
import Togglable from './Togglable'

const BlogView = ({ user, createFormRef }) => {

    const createForm = () => (
      <Togglable
        buttonId={'new-note-button'}
        buttonLabel={'create new'} 
        closeButtonLabel={'cancel'}
        ref={createFormRef} >
          <CreateBlogForm />
      </Togglable>
    )

    return (
    <div>
      {createForm()}
      
      <ListOfBlogs
        user={user} />
    </div>
)}

export default BlogView