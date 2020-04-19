import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION_TO_QUESTIONS,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case ADD_QUESTION_TO_QUESTIONS:
      return {
        ...state,
        [action.question.id]: action.question
      }
    default:
      return state;
  }
}
