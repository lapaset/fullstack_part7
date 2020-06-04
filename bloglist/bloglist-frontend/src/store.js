import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'


const store = createStore(
  notificationReducer,
  composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  const storeNow = store.getState()
  console.log('store now', storeNow)
})

export default store