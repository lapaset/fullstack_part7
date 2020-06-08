import React from 'react'
import InputField from './InputField'
import { useDispatch } from 'react-redux'
import { addBlog } from '../reducers/blogReducer'
import { useField } from '../hooks/hooks'


//next up reset the fields


const CreateBlogForm = () => {
    const { reset: resetTitle, ...title }  = useField('text')
    const { reset: resetAuthor, ...author } = useField('text')
    const { reset: resetUrl, ...url } = useField('text')

    const dispatch = useDispatch()

    const handleCreate = event => {
      event.preventDefault()
  
      const blog = {
        title: title.value,
        author: author.value,
        url: url.value
      }

      dispatch(addBlog(blog))

      resetTitle()
      resetAuthor()
      resetUrl()
    }
  
    return (
      <form onSubmit={handleCreate} className="createBlogForm">
        <h2>Create new</h2>
        <InputField
          id="title"
          field={title}
          text="Title:" 
        />
        <InputField
          id="author"
          field={author}
          text="Author:" 
        />
        <InputField
          id="url"
          field={url}
          text="Url:" 
        />
        <button id="create-blog-button" type="submit">create</button>
      </form>
)}

export default CreateBlogForm