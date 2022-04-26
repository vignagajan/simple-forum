import {Link, useParams} from 'react-router-dom';
import axios from '../axios'
import { useEffect, useState } from "react";

function Topic() {

  const params = useParams();

  const [topic, setTopic] = useState({});

  useEffect(() => {
    axios.get(`/topic/${params.id}`).then((res)=>{
    setTopic(res.data)
  }).catch((error) => {
    console.log(error.response.data)
  })}, [])

  return (
    <div className="container pt-5">
      <div className="row content pt-5">
      <div className="d-flex justify-content-between">
        <h2>{topic.title}</h2>
        <h5>
          <span className="glyphicon glyphicon-time"></span> Post by {topic.user.username}, {new Date(topic.createdAt).toLocaleString("en-US")}.
        </h5>
        </div>
        <br /><br />
        <hr /><br />
        <p>
         {topic.body}
        </p>
        <hr />

        <h4>Leave a Comment:</h4>
        <form>
          <div className="form-group">
            <textarea className="form-control" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
        <br />
        <br />

        <p>
          <span className="badge">2</span> Comments:
        </p>
        <br />

        <div className="row">
          <div className="col-sm-12">
            <h4>
              Anja <small>Sep 29, 2015, 9:12 PM</small>
            </h4>
            <p>
              Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
          </div>
          <div className="col-sm-12">
            <h4>
              John Row <small>Sep 25, 2015, 8:25 PM</small>
            </h4>
            <p>
              I am so happy for you man! Finally. I am looking forward to read
              about your trendy life. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
