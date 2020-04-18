import {combineReducers} from 'redux'
import questions from './questions'
import users from './users'

export default combineReducers({
  questions,
  users
})