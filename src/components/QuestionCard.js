import React from "react";
import { connect } from "react-redux";

function QuestionCard(props) {
  const { authorName, authorAvatarUrl, questionId, optionOneCroppedText } = props;

  return (
    <div>
      <div>
        <p>{`${authorName} asks:`}</p>
      </div>
      <div>
        <img src={authorAvatarUrl} alt={`${authorName}'s avatar`} />
      </div>
      <div>
        <p>Would you rather</p>
        <p>{optionOneCroppedText}</p>
        {/* todo: replace this with <Link> */}
        <a href={`/questions/${questionId}`}>View Poll</a>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const author = users[question.author];

  return {
    authorName: author.name,
    authorAvatarUrl: author.avatarURL,
    questionId: question.id,
    optionOneCroppedText: `${question.optionOne.text.substring(0, 15)}...`,
  };
}

export default connect(mapStateToProps)(QuestionCard);
