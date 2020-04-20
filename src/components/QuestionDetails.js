import React from "react";
import { connect } from "react-redux";
import UnansweredQuestionDetails from "./UnansweredQuestionDetails";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";
import NotFound from "./NotFound";

function QuestionDetails(props) {
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
  const qid = match.params.id;
  const questionExist = questions[qid] ? true: false;
  
  // todo: remove this line after adding routing
    authedUser = authedUser ? authedUser : "sarahedo";

  return {
    typeOfQuestion: Object.keys(users[authedUser].answers).includes(qid)
      ? "answered"
      : "unanswered",
    qid,
    questionExist
  };
}

export default connect(mapStateToProps)(QuestionDetails);
