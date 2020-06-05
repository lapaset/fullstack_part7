const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

var timeout

export const setNotification = notification => {
  return async dispatch => {
    if (timeout)
      clearTimeout(timeout)

    timeout = setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)

    dispatch({
      type: 'SET_NOTIFICATION',
      notification
    })
  }
}

export default notificationReducer