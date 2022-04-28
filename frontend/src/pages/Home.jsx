import { IconContext } from "react-icons";
import { BsFillChatDotsFill , BsFillHandThumbsUpFill} from "react-icons/bs";
import "./home.css"
import axios from '../axios'
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { UserContext } from '../context/UserContext.js'

function Home() {

  const userDetails = useContext(UserContext);

  const [formData, setFormData] = useState({
    title:'',
    body:'',
    user: userDetails._id,
  });

  const navigate = useNavigate()

  const { title, body, user} = formData

  const onChange = (e) =>{
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: [e.target.value]
      }))
  }

  const config = {
    headers: { Authorization: `Bearer ${userDetails.token}` }
  };

  const onSubmit = (e) => {
    e.preventDefault()
      axios.post("/topic",formData, config).then((res)=>{
      toast.success("Post created successfully!")
      // navigate(`/topic/${res.data._id}`)
    }).catch((error) => {
      toast.error(error.response.data)
    })
  }

  const [topic, setTopic] = useState([])
  
  useEffect(() => {
    axios.get("/topic/all").then((res)=>{
    setTopic( res.data) 
  }).catch((error) => {
    console.log(error.response.data)
  })}, [])

  const updateTopic = (item)=>{
  axios.get(`/topic/${item.data._id}`).then((res)=>{
    setTopic(item) 
  }).catch((error) => {
    console.log(error.response.data)
  })}

  return (
  <>
    <ToastContainer />
    <div className="row content">
    <div className="col-sm-9">
    <br />
    { userDetails.username ?
    <>
    <h2>Post a topic </h2>
    <form onSubmit={onSubmit}>
      <div className="form-group">
      <input 
        className="form-control" 
        rows="3"
        type="text" 
        id="title"
        name="title"
        value={title} 
        placeholder="Enter your topic title here..." 
        onChange={onChange}
        required/>
      <textarea 
        className="form-control" 
        rows="3"
        id="body"
        name="body"
        value={body} 
        placeholder="Enter your topic details here..." 
        onChange={onChange}
        required>
      </textarea>
      </div>
      <button type="submit" className="btn btn-success">
        POST
      </button>
    </form>
    </>
    : <><br /> <Link to="/login"><button type="submit" className="w-25 btn btn-success"> Login to Post Topic</button></Link></>}
    <br /><br /><br /><br />
      <h4><small>RECENT TOPICS</small></h4>
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
            { userDetails.username ?
            <>
            <div className="d-flex justify-content-end">
            <button className="btn btn-primary" style={{width:"10%", marginRight:"10px"}} onCLick={updateTopic}> Update </button>
            <button className="btn btn-danger" style={{width:"10%"}}> Delete </button>
            </div>
            </>:<></>}
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