import React, { Component } from "react";
import { connect } from "react-redux";
import { addAuthedUser } from "../actions/authedUser";

// todo: Redirect if the user is already logged in
class Login extends Component {
  login = (e, id) => {
    const { dispatch } = this.props;

    dispatch(addAuthedUser(id));
    // todo: Redirect to where the user came from
  };

  render() {
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

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
