import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";

class Nav extends Component {
  logout = e => {
    e.preventDefault();
    const {dispatch} = this.props;

    dispatch(removeAuthedUser())
    //todo: Redirect to login page
  }

  render() {
    const { authedUser } = this.props;
    const tabs = ["Home", "New Question", "Leader Board"];
    //todo: Add NavLinks to navigation tabs
    
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
          <button onClick={this.logout}>Logout</button>
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
