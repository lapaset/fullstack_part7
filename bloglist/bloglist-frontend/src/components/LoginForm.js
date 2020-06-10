import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InputField from './InputField'
import { loginUser } from '../reducers/loginReducer'
import { useField } from '../hooks/hooks'
import { Button } from './styledComponents'

const LoginForm = () => {
  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetPassword, ...password } = useField('password')

  const history = useHistory()
  const dispatch = useDispatch()
  
  const handleSubmit = event => {
    event.preventDefault()

    dispatch(loginUser({
      username: username.value,
      password: password.value,
    }, true))

    history.push('/')
  }

  return (
  <form onSubmit={handleSubmit}>
    <h2>Log in</h2>
    <InputField 
      id="username"
      field={username}
      text="Username:"
    />
    <InputField 
      id="password"
      field={password}
      text="Password:"
    />
    <Button id="login-button" type="submit">login</Button>
  </form>
)}

export default LoginForm