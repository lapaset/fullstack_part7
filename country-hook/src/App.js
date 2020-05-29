import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useField = (type) => {
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

const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  const hook = () => {
    console.log('name', name)
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then(response => {
        setCountry({ data: response.data[0], found: true })
      })
      .catch(error => {
        if (name && error.response.status === 404)
          setCountry({ found: false })
      })
  }

  useEffect(hook, [name])

  return country
}

const Country = ({ country }) => {
  if (!country) {
    return null
  }

  if (!country.found) {
    return (
      <div>
        not found...
      </div>
    )
  }

  return (
    <div>
      <h3>{country.data.name} </h3>
      <div>capital {country.data.capital} </div>
      <div>population {country.data.population}</div> 
      <img src={country.data.flag} height='100' alt={`flag of ${country.data.name}`}/>  
    </div>
  )
}

const App = () => {
  const { reset: nameInputReset, ...nameInput } = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name, setName)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
    nameInputReset()
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App