import { IconContext } from "react-icons";
import { BsFillChatDotsFill , BsFillHandThumbsUpFill} from "react-icons/bs";
import "./home.css"
import axios from '../axios'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// const getUsername = (id) =>{
//   const [username, seUsername] = useState('')
//   axios.get(`/users/${id}`).then((res)=>{
//     setUsername(res.data.username)
//   })
//   return username
// }

function getParsedDate(date){
  date = String(date).split(' ');
  var days = String(date[0]).split('-');
  var hours = String(date[1]).split(':');
  return [parseInt(days[0]), parseInt(days[1])-1, parseInt(days[2]), parseInt(hours[0]), parseInt(hours[1]), parseInt(hours[2])];
}

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
      {topic.map((item, i) => (
      <div>
      <div className="d-flex justify-content-between">
      <h2>{item.title}</h2>
      <div className="d-flex justify-content-end">
      <IconContext.Provider value={{size: 22}}>
        <BsFillHandThumbsUpFill />
      </IconContext.Provider>
      &nbsp; <h4>78</h4> &nbsp;&nbsp;&nbsp;
      <IconContext.Provider value={{size: 22}}>
        <BsFillChatDotsFill />
      </IconContext.Provider>
      &nbsp; <h4>78</h4> &nbsp;
      </div>
      </div>
      <div className="d-flex justify-content-between">
      <h5><span className="label label-danger">Food</span> <span className="label label-primary">Ipsum</span></h5><br />
      <h5><span className="glyphicon glyphicon-time"></span> Post by {item.user.username}, {new Date(item.createdAt).toLocaleString("en-US")}.</h5>
      </div>
      <hr />
      </div>
      ))}

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