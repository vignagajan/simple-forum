function Question() {
  const question = {
    title: "Title 3",
    text: "What's the correct syntax or command that allows you to install node_modules in a specific directory?\n\n\nTo be more specific, this is related to WordPRess. I'm following a tutorial and it is asking me to paste in npm install @wordpress/scripts --save-dev, but this installs it at the root app directory of my project. Does anyone know how to allocate, set, install node_modules folder to the root plugin directory?\nHere's the current basic structure:",
    createdAt: "2022-04-18T10:17:12.382+00:00",
    comments: [
      { user: "NoOne", text: "Use Lorem Ipsum" },
      { user: "Hyper", text: "Its not working" },
    ],
  };
  return (
    <>
      <div className="question">
        <div className="title">{question.title}</div>
        <span className="date">
          {new Date(question.createdAt).toLocaleString("en-US")}
        </span>
        <div className="text">{question.text}</div>
      </div>
      <div className="comments">
        <h5>Comments</h5>
        {question.comments.map((comment) => (
          <div className="comment">
            {comment.user}: {comment.text}
          </div>
        ))}
        <div className="form-group">
            <input type="text" name="newcomment" id="newcomment" />
          <button className="btn">Add comment</button>
        </div>
      </div>
    </>
  );
}

export default Question;
