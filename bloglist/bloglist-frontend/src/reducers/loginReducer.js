import loginService from '../services/login'
import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'
import { setErrorMessage } from './errorMessageReducer'

const loginReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.newUser
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export const loginUser = (user, notify) => {
  return async dispatch => {
    try {
      const newUser = await loginService.login(user)

      dispatch({
        type: 'LOGIN',
        newUser
      })

      window.localStorage.setItem('loggedBloglistUser', JSON.stringify(user))
      blogService.setToken(newUser.token)
      
      if (notify)
        dispatch(setNotification(`Logged in as ${user.username}`))
  
    } catch {
      dispatch(setErrorMessage('Invalid username or password'))
    }
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
}

export default loginReducer