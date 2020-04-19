import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddVote } from "../actions/shared";

class UnansweredQuestionDetails extends Component {
  handleClick = (e, answer) => {
    e.preventDefault();

    const { authedUser, qid, dispatch } = this.props;
    const vote = {
      authedUser,
      qid,
      answer,
    };

    dispatch(handleAddVote(vote));
  };

  render() {
    const {
      optionOneText,
      optionTwoText,
      authorName,
      authorAvatar,
    } = this.props;

    return (
      <div>
        <div>
          <p>{`${authorName} asks:`}</p>
        </div>
        <div>
          <img src={authorAvatar} alt={`${authorName}'s avatar`} />
        </div>
        <div>
          <p>Would You Rather ..</p>
          <button onClick={(e) => this.handleClick(e, "optionOne")}>
            {optionOneText}
          </button>
          <p>-OR-</p>
          <button onClick={(e) => this.handleClick(e, "optionTwo")}>
            {optionTwoText}
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { qid }) {
  const question = questions[qid];
  const author = users[question.author];

  return {
    optionOneText: question.optionOne.text,
    optionTwoText: question.optionTwo.text,
    authorName: author.name,
    authorAvatar: author.avatarURL,
    authedUser,
    qid,
  };
}

export default connect(mapStateToProps)(UnansweredQuestionDetails);
