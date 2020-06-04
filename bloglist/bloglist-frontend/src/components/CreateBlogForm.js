import React, { useState } from 'react'
import InputField from './InputField'
import { useDispatch } from 'react-redux'
import { addBlog } from '../reducers/blogReducer'

const CreateBlogForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const dispatch = useDispatch()

    const handleCreate = event => {
      event.preventDefault()
  
      const blog = {
        title: title,
        author: author,
        url: url
      }

      setTitle('')
      setAuthor('')
      setUrl('')

      dispatch(addBlog(blog))
    }

    const handleTitleChange = ({ target }) => setTitle(target.value)
    const handleAuthorChange = ({ target }) => setAuthor(target.value)
    const handleUrlChange = ({ target }) => setUrl(target.value)
  
    return (
      <form onSubmit={handleCreate} className="createBlogForm">
        <h2>Create new</h2>
        <InputField
          id="title"
          type="text"
          name="Title"
          value={title}
          onChange={handleTitleChange} 
        />
        <InputField
          id="author"
          type="text"
          name="Author"
          value={author}
          onChange={handleAuthorChange}
        />
        <InputField
          id="url"
          type="text"
          name="Url"
          value={url}
          onChange={handleUrlChange}
        />  
        <button id="create-blog-button" type="submit">create</button>
      </form>
)}

export default CreateBlogForm