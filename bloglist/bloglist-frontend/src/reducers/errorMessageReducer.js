const errorMessageReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.errorMessage
    case 'CLEAR_ERROR':
      return null
    default:
      return state
  }
}

const clearErrorMessage = () => {
  return {
    type: 'CLEAR_ERROR'
  }
}

var timeout

export const setErrorMessage = errorMessage => {
  return async dispatch => {
    if (timeout)
      clearTimeout(timeout)
    
    timeout = setTimeout(() => {
      dispatch(clearErrorMessage())
    }, 5000)

    dispatch({
      type: 'SET_ERROR',
      errorMessage
    })
  }
}

export default errorMessageReducer