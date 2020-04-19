import {
  RECEIVE_USERS,
  ADD_QUESTION_TO_USER,
  ADD_VOTE_TO_USER,
} from "../actions/users";
import user from "./user";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.question.author]: user(state[action.question.author], action),
      };
    case ADD_VOTE_TO_USER:
      return {
        ...state,
        [action.vote.authedUser]: user(state[action.vote.authedUser], action),
      };
    default:
      return state;
  }
}
