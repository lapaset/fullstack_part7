import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  const storeNow = store.getState()
  console.log('store now', storeNow)
})

export default store