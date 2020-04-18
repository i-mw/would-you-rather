import {combineReducers} from 'redux'
import questions from './questions'
import users from './users'
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  questions,
  users,
  loadingBar: loadingBarReducer
})