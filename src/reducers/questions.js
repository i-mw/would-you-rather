import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION_TO_QUESTIONS,
  ADD_VOTE_TO_QUESTION
} from "../actions/questions";
import question from "./question";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case ADD_QUESTION_TO_QUESTIONS:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ADD_VOTE_TO_QUESTION:
      return {
        ...state,
        [action.vote.qid]: question(state[action.vote.qid], action) 
      }
    default:
      return state;
  }
}
