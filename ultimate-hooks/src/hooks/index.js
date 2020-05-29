import { useState, useEffect } from 'react'
import axios from 'axios'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => setValue('')

  return {
    type,
    value,
    onChange,
    reset
  }
}

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])
  
  const setAll = () => {
    const fetchData = async () => {
      const request = await axios.get(baseUrl)
      setResources(request.data)
    }
    fetchData()
  }

  const create = async (resource) => {
    await axios.post(baseUrl, resource)
    setAll()
  }

  const service = {
    create
  }

  useEffect(setAll, [])

  return [
    resources, service
  ]
}