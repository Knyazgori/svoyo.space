import { combineReducers } from 'redux'
import { tetrisReducer } from './tetrisReducer'
import { adminReducer } from './adminReducer'

export const rootReducer = combineReducers({
  adminReducer,
  tetrisReducer,
})
