import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import { connect } from "react-redux";

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
              <li key={questionId} className="question-card">
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
  // todo: remove this line after adding routing
  authedUser = authedUser ? authedUser : "sarahedo";

  const answeredQuestions = Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  const unansweredQuestions = Object.keys(questions)
    .filter((questionId) => !answeredQuestions.includes(questionId))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(QuestionList);
