import { ADD_VOTE_TO_QUESTION } from "../actions/questions";

export default function question(state = {}, action) {
  switch (action.type) {
    case ADD_VOTE_TO_QUESTION:
      return {
        ...state,
        [action.vote.answer]: {
          ...state[action.vote.answer],
          votes: state[action.vote.answer].votes.concat([
            action.vote.authedUser,
          ]),
        },
      };
    default:
      return state;
  }
}
