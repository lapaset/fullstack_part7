import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import errorMessageReducer from './reducers/errorMessageReducer'
import loginReducer from './reducers/loginReducer'
import usersReducer from './reducers/usersReducer'

const reducer = combineReducers({
  notification: notificationReducer,
  errorMessage: errorMessageReducer,
  blogs: blogReducer,
  user: loginReducer,
  users: usersReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  const storeNow = store.getState()
  console.log('store now', storeNow)
})

export default store