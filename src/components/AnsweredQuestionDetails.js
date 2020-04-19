import React from "react";
import { connect } from "react-redux";

function AnsweredQuestionDetails(props) {
  const {
    userName,
    userAvatar,
    totalVotes,
    optionOne,
    optionTwo,
    authedUserVote,
  } = props;

  return (
    <div>
      <div>
        <p>{`Asked by ${userName}`}</p>
      </div>
      <div>
        <img src={userAvatar} alt={`${userName}'s avatar`} />
      </div>
      <div>
        <p>Results:</p>
        <div>
          {authedUserVote === "optionOne" && (
            <p>
              Your
              <br />
              Vote
            </p>
          )}
          <p>{`Would you rather ${optionOne.text}?`}</p>
          <p>{`${optionOne.votesPercent}%`}</p>
          <p>{`${optionOne.votesNum} out of ${totalVotes} votes`}</p>
        </div>
        <div>
          {authedUserVote === "optionTwo" && (
            <p>
              Your
              <br />
              Vote
            </p>
          )}
          <p>{`Would you rather ${optionTwo.text}?`}</p>
          <p>{`${optionTwo.votesPercent}%`}</p>
          <p>{`${optionTwo.votesNum} out of ${totalVotes} votes`}</p>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ users, questions, authedUser }, { qid }) {
  // todo: remove this line after adding routing
  authedUser = authedUser ? authedUser : "sarahedo";
    
  const question = questions[qid];
  const author = users[question.author];
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  
  return {
    userName: author.name,
    userAvatar: author.avatarURL,
    totalVotes,
    optionOne: {
      text: question.optionOne.text,
      votesNum: question.optionOne.votes.length,
      votesPercent:
        Math.round((question.optionOne.votes.length / totalVotes) * 100 * 10) /
        10,
    },
    optionTwo: {
      text: question.optionTwo.text,
      votesNum: question.optionTwo.votes.length,
      votesPercent:
        Math.round((question.optionTwo.votes.length / totalVotes) * 100 * 10) /
        10,
    },
    authedUserVote: users[authedUser].answers[qid],
  };
}

export default connect(mapStateToProps)(AnsweredQuestionDetails);
