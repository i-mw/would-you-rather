import React from "react";
import { connect } from "react-redux";
import UnansweredQuestionDetails from "./UnansweredQuestionDetails";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";

function QuestionDetails(props) {
  const { typeOfQuestion, qid } = props;

  if (typeOfQuestion === "unanswered") {
    return <UnansweredQuestionDetails qid={qid} />;
  } else if (typeOfQuestion === "answered") {
    return <AnsweredQuestionDetails qid={qid} />;
  }
}

function mapStateToProps({ users, authedUser }, { qid }) {
  // todo: get question id from Route not from direct props
  
  // todo: remove this line after adding routing
    authedUser = authedUser ? authedUser : "sarahedo";

  return {
    typeOfQuestion: Object.keys(users[authedUser].answers).includes(qid)
      ? "answered"
      : "unanswered",
    qid,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
