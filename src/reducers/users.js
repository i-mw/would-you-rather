import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from "../actions/users";
import user from './user'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.question.author]: user(state[action.question.author], action)
      }
    default:
      return state;
  }
}
