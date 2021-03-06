import axios from 'axios'
const baseUrl = '/api/blogs'

let token = 'null'
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createBlog = async newBlog => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const updateBlog = async newBlog => {
  console.log(newBlog)
  const response = await axios.put(`${baseUrl}/${newBlog.id}`, newBlog)
  return response.data
}

const deleteBlog = async id => {
  console.log('token', token)
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

const addComment = async (id, comment) => {
  const commentObject = { comment }
  const response = await axios.post(`${baseUrl}/${id}/comments`, commentObject)
  console.log('response data', response.data)
  return response.data
}

export default { getAll, setToken, createBlog, updateBlog, deleteBlog, addComment }