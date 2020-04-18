import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    const {loading} = this.props;

    return (
      <>
        <LoadingBar />
        {!loading && <div>Data is ready!</div>}
      </>
    );
  }
}

function mapStateToProps({loadingBar}) {
  return {
    loading: loadingBar.default
  }
}

export default connect(mapStateToProps)(App);
