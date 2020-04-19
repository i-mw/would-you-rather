import React from "react";
import { connect } from "react-redux";

function UserRank(props) {
  const {
    userName,
    userAvatar,
    answeredQNum,
    createdQNum,
    score,
    rank,
  } = props;

  return (
    <>
      <div className="user-ranking rounded-borders light-gray-background">
        <p>{rank}</p>
      </div>
      <div className="user-avatar">
        <img src={userAvatar} alt={`${userName}'s avatar`} />
      </div>
      <div className="user-details">
        <p className="user-name">{userName}</p>
        <div className="user-answered">
          <p>Answered questions</p>
          <span>{answeredQNum}</span>
        </div>
        <div className="user-created">
          <p>Created questions</p>
          <span>{createdQNum}</span>
        </div>
      </div>
      <div className="user-score rounded-borders">
        <p>Score</p>
        <p>{score}</p>
      </div>
    </>
  );
}

function mapStateToProps({ users }, { id, rank }) {
  const user = users[id];
  const answeredQNum = Object.keys(user.answers).length;
  const createdQNum = user.questions.length;

  return {
    userName: user.name,
    userAvatar: user.avatarURL,
    answeredQNum,
    createdQNum,
    score: answeredQNum + createdQNum,
    rank,
  };
}

export default connect(mapStateToProps)(UserRank);
