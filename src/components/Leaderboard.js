import React from "react";
import { connect } from "react-redux";
import UserRank from "./UserRank";
import { Redirect } from "react-router-dom";

function Leaderboard(props) {
  const {loggedIn} = props;
  if(!loggedIn) {
    return <Redirect to={{pathname: '/login', state: {referrer: '/leaderboard'}}}/>
  }

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

function mapStateToProps({ users, authedUser }) {
  if (!authedUser) {
    return {
      loggedIn: false
    }
  }

  const rankedUserIds = Object.keys(users).sort(
    (a, b) => (
      (users[b].questions.length +
      Object.keys(users[b].answers).length) -
      (users[a].questions.length + Object.keys(users[a].answers).length)
    )
  );

  return {
    rankedUserIds,
    loggedIn: true
  };
}

export default connect(mapStateToProps)(Leaderboard);
