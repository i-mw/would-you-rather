import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav"
import QuestionCard from "./QuestionCard"
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'
import UserRank from './UserRank'
import Leaderboard from "./Leaderboard";
import UnansweredQuestionDetails from './UnansweredQuestionDetails'
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";
import QuestionDetails from './QuestionDetails'
import NotFound from "./NotFound";

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
            <Nav />
            <div className="container">
              <Switch>
                <Route exact path='/' component={QuestionList}/>
                <Route exact path='/add' component={NewQuestion}/>
                <Route exact path='/leaderboard' component={Leaderboard}/>
                <Route exact path='/questions/:id' component={QuestionDetails}/>
                <Route exact path='/login' component={Login}/>
                <Route render={() => (<NotFound type='page'/>)}/>
              </Switch>
            </div>
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
