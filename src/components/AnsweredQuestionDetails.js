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
    <div className="answered-question rounded-borders">
      <div className="author-name light-gray-background">
        <p>{`Asked by ${userName}`}</p>
      </div>
      <div className="author-avatar">
        <img src={userAvatar} alt={`${userName}'s avatar`} />
      </div>
      <div className="question-preview">
        <p>Results:</p>
        <div className="option light-gray-background rounded-borders">
          {authedUserVote === "optionOne" && (
            <p className='your-vote'>
              Your
              <br />
              Vote
            </p>
          )}
          <p className="question">{`Would you rather ${optionOne.text}?`}</p>
          <div className="percent"><p style={{width: `${optionOne.votesPercent}%`}}>{`${optionOne.votesPercent}%`}</p></div>
          <p className="votes">{`${optionOne.votesNum} out of ${totalVotes} votes`}</p>
        </div>
        <div className="option light-gray-background rounded-borders">
          {authedUserVote === "optionTwo" && (
            <p className='your-vote'>
              Your
              <br />
              Vote
            </p>
          )}
          <p className="question">{`Would you rather ${optionTwo.text}?`}</p>
          <div className="percent"><p style={{width: `${optionTwo.votesPercent}%`}}>{`${optionTwo.votesPercent}%`}</p></div>
          <p className="votes">{`${optionTwo.votesNum} out of ${totalVotes} votes`}</p>
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
