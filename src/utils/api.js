import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA'

// Returns object contains {users, questions} objects
export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
}

// Receives object containing {author, optionOneText, optionTwoText}
// returns formatted question object
export function saveQuestion(info) {
  return _saveQuestion(info)
}

// Receives object containing {authedUser, qid, answer}
// Returns nothing
export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info)
}