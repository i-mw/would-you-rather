import React from "react";
import { connect } from "react-redux";
import UserRank from "./UserRank";

function Leaderboard(props) {
  const {rankedUserIds} = props

  return (
    <ul className='leaderboard'>
      {
        rankedUserIds.map((userId, index) => (
          <li key={userId} className='user-card rounded-borders'>
            <UserRank id={userId} rank={index+1}/>
          </li>
        ))
      }    
    </ul>
  )
}

function mapStateToProps({ users }) {
  const rankedUserIds = Object.keys(users).sort(
    (a, b) => (
      (users[b].questions.length +
      Object.keys(users[b].answers).length) -
      (users[a].questions.length + Object.keys(users[a].answers).length)
    )
  );

  return {
    rankedUserIds,
  };
}

export default connect(mapStateToProps)(Leaderboard);
