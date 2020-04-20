import { ADD_QUESTION_TO_USER, ADD_VOTE_TO_USER } from "../actions/users";

export default function user(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        questions: state.questions.concat([action.question.id]),
      };
    case ADD_VOTE_TO_USER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.vote.qid]: action.vote.answer,
        },
      };
    default:
      return state;
  }
}
