import React, { Component } from "react";
import { connect } from "react-redux";
import { addAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Login extends Component {
  login = (e, id) => {
    const { dispatch, history, location } = this.props;

    dispatch(addAuthedUser(id));
    if (location.state && location.state.referrer) {
      history.push(location.state.referrer)
    } else {
      history.push('/')
    }
  };

  render() {
    // Prevent logged in user from going to login page
    const {loggedIn} = this.props;

    if(loggedIn) {
      return <Redirect to='/'/>
    }

    const { users } = this.props;

    return (
      <div className="login rounded-borders">
        <div className="heading light-gray-background">
          <h2>Welcome to the Would You Rather Game</h2>
          <p>please sign in to continue</p>
        </div>
        <div className="details">
          <p>Sign in using one of the existing users</p>
          <ul className="users-list">
            {Object.keys(users).map((userId) => {
              const user = users[userId];

              return (
                <li
                  key={user.id}
                  className="user dark-gray-background rounded-borders"
                  onClick={(e) => {
                    this.login(e, user.id);
                  }}
                >
                  <img src={user.avatarURL} alt={`${user.name}'s avatar`} />
                  <p>{user.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  if (authedUser) {
    return {
      loggedIn: true
    }
  }

  return {
    users,
    loggedIn: false
  };
}

export default connect(mapStateToProps)(Login);
