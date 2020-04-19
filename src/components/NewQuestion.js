import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";

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

    const { authedUser, dispatch } = this.props;
    const { optionOne, optionTwo } = this.state;

    dispatch(handleAddQuestion(authedUser, optionOne, optionTwo));

    this.setState({
      optionOne: "",
      optionTwo: "",
    });

    // todo: Check if you are required to redirect to home page
  };

  render() {
    const { optionOne, optionTwo } = this.state;

    return (
      <div>
        <h3>Create New Question</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={optionOne}
            onChange={(e) => {
              this.handleChange(e, "optionOne");
            }}
          />
          <p>OR</p>
          <input
            type="text"
            value={optionTwo}
            onChange={(e) => {
              this.handleChange(e, "optionTwo");
            }}
          /><br/><br/>
          <button type="submit" disabled={optionOne === "" || optionTwo === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
