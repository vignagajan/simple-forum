import React from "react";

function QuestionItem({ question }) {
  return (
    <div className="question">
      <span className="date">{new Date(question.createdAt).toLocaleString("en-US")}</span>
      <div className="question-text">{question.title}</div>
    </div>
  );
}

export default QuestionItem;
