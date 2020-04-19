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
    <div>
      <div>
        <p>Rank</p>
        <p>{rank}</p>
      </div>
      <div>
        <img src={userAvatar} alt={`${userName}'s avatar`} />
      </div>
      <div>
        <p>{userName}</p>
        <div>
          <p>Answered questions</p>
          <span>{answeredQNum}</span>
        </div>
        <div>
          <p>Created questions</p>
          <span>{createdQNum}</span>
        </div>
      </div>
      <div>
        <p>Score</p>
        <p>{score}</p>
      </div>
    </div>
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
