import { getInitialData, saveQuestion } from "../utils/api";
import { receiveQuestions, addQuestionToQuestions } from "./questions";
import { receiveUsers, addQuestionToUser } from "./users";
import { showLoading } from "react-redux-loading-bar";
import { hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ questions, users }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleAddQuestion(author, optionOneText, optionTwoText) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion({ author, optionOneText, optionTwoText }).then((question) => {
      dispatch(addQuestionToQuestions(question));
      dispatch(addQuestionToUser(question));
      dispatch(hideLoading());
    });
  };
}
