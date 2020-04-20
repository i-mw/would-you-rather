import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  logout = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(removeAuthedUser());
  };

  render() {
    const { authedUser } = this.props;
    const tabs = [["Home", '/'], ["New Question", '/add'], ["Leader Board", '/leaderboard']];

    return (
      <nav>
          <ul className="tabs">
            {tabs.map((tab) => (
              <li key={tab[0]}><NavLink activeClassName='active-page' exact to={tab[1]}>{tab[0]}</NavLink></li>
            ))}
          </ul>
          {authedUser && (
            <div className="session-details">
              <p>{`Hello ${authedUser.name}`}</p>
              <img
                src={authedUser.avatarURL}
                alt={`${authedUser.name}'s avatar`}
              />
              <button onClick={this.logout}>Logout</button>
            </div>
          )}
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
