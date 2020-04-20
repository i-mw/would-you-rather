import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// todo: possible bug may arise from settings the state here
// make sure whenever you logout and login again you are
// shown the unanswered questions first ( be default) 
class QuestionList extends Component {
  state = {
    showingUnanswered: true,
  };

  toggleShowingUnanswered(e, showingUnanswered) {
    e.preventDefault();

    this.setState({
      showingUnanswered,
    });
  }

  render() {
    const {loggedIn} = this.props;
    if(!loggedIn) {
      return <Redirect to='/login'/>
    }

    const { showingUnanswered } = this.state;
    const { answeredQuestions, unansweredQuestions } = this.props;

    return (
      <div className="questions-list rounded-borders">
        <div className="category-select">
          <button
            className={`${showingUnanswered ? "active-tab" : "inactive-tab"} rounded-borders`}
            onClick={(e) => {
              this.toggleShowingUnanswered(e, true);
            }}
          >
            Unanswered Questions
          </button>
          <button
            className={`${!showingUnanswered ? "active-tab" : "inactive-tab"} rounded-borders`}
            onClick={(e) => {
              this.toggleShowingUnanswered(e, false);
            }}
          >
            Answered Questions
          </button>
        </div>
        <ul className="list">
          {(showingUnanswered ? unansweredQuestions : answeredQuestions).map(
            (questionId) => (
              <li key={questionId} className="question-card rounded-borders">
                <QuestionCard id={questionId} />
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  if (!authedUser) {
    return {
      loggedIn: false
    }
  }

  const answeredQuestions = Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  const unansweredQuestions = Object.keys(questions)
    .filter((questionId) => !answeredQuestions.includes(questionId))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestions,
    unansweredQuestions,
    loggedIn: true
  };
}

export default connect(mapStateToProps)(QuestionList);
