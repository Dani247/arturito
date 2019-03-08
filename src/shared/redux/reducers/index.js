// Dependencies
import { combineReducers } from 'redux'

// Components Reducers
import authReducer from './authReducer'

// Combine Reducers
const rootReducer = combineReducers({
  authReducer
})

export default rootReducer
