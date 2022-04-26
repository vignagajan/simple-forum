import { IconContext } from "react-icons";
import { BsFillChatDotsFill , BsFillHandThumbsUpFill} from "react-icons/bs";
import "./home.css"
import axios from '../axios'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {

  const [topic, setTopic] = useState([])
  
  useEffect(() => {
    axios.get("/topic/all").then((res)=>{
    setTopic(res.data) 
  }).catch((error) => {
    console.log(error.response.data)
  })}, [])

  return (
  <>
    <div className="row content">
    <div className="col-sm-9">
      
      <h4><small>RECENT POSTS</small></h4>
      <hr />
      {topic.map((item, i) => {
        return (
          <div>
            <div className="d-flex justify-content-between">
              <Link to={`/topic/${item._id}`} style={{ textDecoration: "none", color: "#000000"}}><h2>{item.title}</h2></Link>
              <div className="d-flex justify-content-end">
                <IconContext.Provider value={{ size: 22 }}>
                  <BsFillHandThumbsUpFill />
                </IconContext.Provider>
                &nbsp; <h4>{item.votes.length}</h4> &nbsp;&nbsp;&nbsp;
                <IconContext.Provider value={{ size: 22 }}>
                  <BsFillChatDotsFill />
                </IconContext.Provider>
                &nbsp; <h4>{item.comments.length}</h4> &nbsp;
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <h5><span className="label label-danger">Food</span> <span className="label label-primary">Ipsum</span></h5><br />
              <h5><span className="glyphicon glyphicon-time"></span> Post by {item.user.username}, {new Date(item.createdAt).toLocaleString("en-US")}.</h5>
            </div>
            <hr />
          </div>
        );
      })}

       <br /> <br /> <br />
       </div>

      <div className="col-sm-3">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search..." />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div>
    </div>
      </>
  )
}

export default Home