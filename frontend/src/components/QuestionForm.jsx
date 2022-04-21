import { useState } from "react";

function QuestionForm() {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="form">
        <div className="form-group">
          <label htmlFor="text">Question</label>
          <textarea
            rows="6"
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Add question</button>
        </div>
      </section>
    </>
  );
}

export default QuestionForm;
