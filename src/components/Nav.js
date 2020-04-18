import React, { Component } from "react";
import { connect } from "react-redux";

class Nav extends Component {
  logout = e => {
    e.preventDefault();

    //todo: dispatch logging out
  }

  render() {
    const { authedUser } = this.props;
    const tabs = ["Home", "New Question", "Leader Board"];

    return (
      <nav>
        <ul className="tabs">
          {tabs.map((tab) => (
            <li key={tab}>{tab}</li>
          ))}
        </ul>
        {authedUser && <div className="session-details">
          <p>{`Hello ${authedUser.name}`}</p>
          <img src={authedUser.avatarURL} alt={`${authedUser.name}'s avatar`}/>
          <button onClick={logout}>Logout</button>
        </div>}
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser ? users[authedUser] : null,
  };
}

export default connect(mapStateToProps)(Nav);
