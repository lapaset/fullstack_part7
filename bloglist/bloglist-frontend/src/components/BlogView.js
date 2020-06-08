import React from 'react'
import { useSelector } from 'react-redux'
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

    const blogs = useSelector(s => s.blogs)

    return (
    <div>
      {createForm()}
      <h2>Blogs</h2>
      <ListOfBlogs blogs={blogs} />
    </div>
)}

export default BlogView