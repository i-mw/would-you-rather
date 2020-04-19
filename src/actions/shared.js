import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import {
  receiveQuestions,
  addQuestionToQuestions,
  addVoteToQuestion,
} from "./questions";
import { receiveUsers, addQuestionToUser, addVoteToUser } from "./users";
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
    return saveQuestion({ author, optionOneText, optionTwoText }).then(
      (question) => {
        dispatch(addQuestionToQuestions(question));
        dispatch(addQuestionToUser(question));
        dispatch(hideLoading());
      }
    );
  };
}

export function handleAddVote(vote) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer(vote).then(() => {
      dispatch(addVoteToQuestion(vote));
      dispatch(addVoteToUser(vote));
      dispatch(hideLoading());
    });
  };
}
