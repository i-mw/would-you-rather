import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange = (e, option) => {
    const value = e.target.value;

    this.setState({
      [option]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { authedUser, dispatch, history } = this.props;
    const { optionOne, optionTwo } = this.state;

    dispatch(handleAddQuestion(authedUser, optionOne, optionTwo));

    this.setState({
      optionOne: "",
      optionTwo: "",
    });

    // Redirect to home after submitting
    history.push("/");
  };

  render() {
    const { loggedIn } = this.props;
    
    if (!loggedIn) {
      return (
        <Redirect to={{ pathname: "/login", state: { referrer: "/add" } }} />
      );
    }

    const { optionOne, optionTwo } = this.state;

    return (
      <div className="new-question rounded-borders">
        <h2 className="light-gray-background">Create New Question</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Would you rather ...</p>
          <input
            placeholder="Enter Option One"
            className="rounded-borders"
            type="text"
            value={optionOne}
            onChange={(e) => {
              this.handleChange(e, "optionOne");
            }}
          />
          <p>OR</p>
          <input
            placeholder="Enter Option Two"
            className="rounded-borders"
            type="text"
            value={optionTwo}
            onChange={(e) => {
              this.handleChange(e, "optionTwo");
            }}
          />
          <br />
          <br />
          <button
            className="dark-gray-background rounded-borders"
            type="submit"
            disabled={optionOne === "" || optionTwo === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  if (!authedUser) {
    return {
      loggedIn: false,
    };
  }

  return {
    authedUser,
    loggedIn: true,
  };
}

export default connect(mapStateToProps)(NewQuestion);
