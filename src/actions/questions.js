export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION_TO_QUESTIONS = "ADD_QUESTION_TO_QUESTIONS";
export const ADD_VOTE_TO_QUESTION = 'ADD_VOTE_TO_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestionToQuestions(question) {
  return {
    type: ADD_QUESTION_TO_QUESTIONS,
    question
  }
}

export function addVoteToQuestion(vote) {
  return {
    type: ADD_VOTE_TO_QUESTION,
    vote
  }
}