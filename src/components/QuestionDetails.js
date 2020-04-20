import React from "react";
import { connect } from "react-redux";
import UnansweredQuestionDetails from "./UnansweredQuestionDetails";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";
import NotFound from "./NotFound";
import { Redirect } from "react-router-dom";

function QuestionDetails(props) {
  const {loggedIn} = props;
  if(!loggedIn) {
    return <Redirect to='/login'/>
  }

  const { typeOfQuestion, qid, questionExist } = props;

  if (!questionExist) {
    return <NotFound type="question"/>
  }

  if (typeOfQuestion === "unanswered") {
    return <UnansweredQuestionDetails qid={qid} />;
  } else if (typeOfQuestion === "answered") {
    return <AnsweredQuestionDetails qid={qid} />;
  }
}

function mapStateToProps({ users, authedUser, questions }, { match }) {
  if (!authedUser) {
    return {
      loggedIn: false
    }
  }

  const qid = match.params.id;
  const questionExist = questions[qid] ? true: false;

  return {
    typeOfQuestion: Object.keys(users[authedUser].answers).includes(qid)
      ? "answered"
      : "unanswered",
    qid,
    questionExist,
    loggedIn: true
  };
}

export default connect(mapStateToProps)(QuestionDetails);
