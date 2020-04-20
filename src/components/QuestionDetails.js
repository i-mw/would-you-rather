import React from "react";
import { connect } from "react-redux";
import UnansweredQuestionDetails from "./UnansweredQuestionDetails";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";
import NotFound from "./NotFound";
import { Redirect } from "react-router-dom";

function QuestionDetails(props) {
  const { loggedIn, qid } = props;

  if (!loggedIn) {
    return (
      <Redirect
        to={{ pathname: "/login", state: { referrer: `/questions/${qid}` } }}
      />
    );
  }

  const { typeOfQuestion, questionExist } = props;

  if (!questionExist) {
    return <NotFound type="question" />;
  }

  if (typeOfQuestion === "unanswered") {
    return <UnansweredQuestionDetails qid={qid} />;
  } else if (typeOfQuestion === "answered") {
    return <AnsweredQuestionDetails qid={qid} />;
  }
}

function mapStateToProps({ users, authedUser, questions }, { match }) {
  const qid = match.params.id;

  if (!authedUser) {
    return {
      loggedIn: false,
      qid,
    };
  }

  const questionExist = questions[qid] ? true : false;

  return {
    typeOfQuestion: Object.keys(users[authedUser].answers).includes(qid)
      ? "answered"
      : "unanswered",
    qid,
    questionExist,
    loggedIn: true,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
