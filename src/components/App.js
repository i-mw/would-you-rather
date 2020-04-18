import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Login from "./Login";
import Nav from "./Nav"

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    const { loading, authedUser } = this.props;

    return (
      <>
        <LoadingBar />
        {!loading && (
          <>
            <p>authed user is: {authedUser}</p>
            <Nav />
          </>
        )}
      </>
    );
  }
}

function mapStateToProps({ loadingBar, authedUser }) {
  return {
    loading: loadingBar.default,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
