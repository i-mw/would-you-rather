import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Login from "./Login";
import Nav from "./Nav"
import QuestionCard from "./QuestionCard"
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'
import UserRank from './UserRank'
import Leaderboard from "./Leaderboard";
import UnansweredQuestionDetails from './UnansweredQuestionDetails'


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    const { initialLoading, authedUser } = this.props;

    return (
      <>
        <LoadingBar />
        {initialLoading !== 0 && (
          <>
            <p>authed user is: {authedUser}</p>
            <UnansweredQuestionDetails qid={'8xf0y6ziyjabvozdd253nd'}/>
            {/* <Leaderboard/> */}
            {/* <UserRank id='sarahedo' rank={2}/> */}
            <Login/>
            {/* <NewQuestion/> */}
            <QuestionList/>
            {/* <QuestionCard id='xj352vofupe1dqz9emx13r'/> */}
            {/* <Nav /> */}
          </>
        )}
      </>
    );
  }
}

function mapStateToProps({ loadingBar, authedUser, questions }) {
  return {
    initialLoading: Object.keys(questions).length,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
