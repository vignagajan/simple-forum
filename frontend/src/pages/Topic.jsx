import { useParams } from "react-router-dom";
import axios from "../axios";
import { useEffect, useState } from "react";

function Topic() {
  const params = useParams();

  const [topic, setTopic] = useState({});
  const [commentForm, setCommentForm] = useState({ comment: "" });

  const { comment } = commentForm;

  useEffect(() => {
    axios
      .get(`/topic/${params.id}`)
      .then((res) => {
        setTopic(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const onChange = (e) => {
    setCommentForm((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Enter a comment");
    }
    axios
      .post(`/topic/${params.id}`, {
        comment: comment[0],
      })
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(topic);
  return (
    <div className="container">
      {topic.user ? (
        <div className="row content">
          <div className="d-flex justify-content-between">
            <h2>{topic.title}</h2>
            <br />
          </div>
          <div className="h6">
            <span className="glyphicon glyphicon-time"></span> Asked by{" "}
            {topic.user.name},{" "}
            {new Date(topic.createdAt).toLocaleString("en-US")}.
          </div>
          <hr />
          <br />
          <p>{topic.body}</p>
          <hr />

          <div className="h6">Leave a Comment:</div>
          <form>
            <div className="form-group">
              <textarea
                id="comment"
                name="comment"
                className="form-control"
                rows="3"
                value={comment}
                onChange={onChange}
                required
              ></textarea>
            </div>
            <button className="btn btn-success" onClick={onSubmit}>
              Submit
            </button>
          </form>
          <br />
          <br />
          <p className="pt-3">
            <span className="badge bg-secondary display-6">
              {topic.comments.length}
            </span>{" "}
            Comments:
          </p>
          <br />

          <div className="row">
            {topic.comments.map((comment, i) => {
              return (
                <div key={i} className="col-sm-12">
                  <div>
                    <b>{comment.user}</b>{" "}
                    <small>
                      {new Date(comment.createdAt).toLocaleString("en-US")}
                    </small>
                  </div>
                  <p className="alert alert-secondary">{comment.comment}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Topic;
