import {Link} from 'react-router-dom';
import { useState } from 'react';
import "./login.css"

function Register() {

  const [formData, setFormData] = useState({
      username:'',
      email:'',
      password:'',
      cpassword:'',
  });

  const { username, email, password, cpassword } = formData

  const onChange = (e) =>{
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: [e.target.value]
      }))
  }

  const onSubmit = (e) => {

    e.prevetDefault()

    if (password !== cpassword){
        return(
            <div class="alert alert-danger text-center" >
            <strong>You already logged in! </strong> 
            <p><a href="{% url 'logout' %}">Click here to logout!</a></p>
            </div>
        )
    }
  }

  return (

    <div className="login-form">
      <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label><b>Username:</b></label>
            <input
              type="text" 
              id="username"
              name="username"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="form-group"> 
            <label><b>Email:</b></label>
            <input
              type="email" 
              id="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group"> 
            <label><b>Password:</b></label>
            <input
              type="password" 
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-group"> 
            <label><b>Confirm Password:</b></label>
            <input
              type="password" 
              id="cpassword"
              name="cpassword"
              value={cpassword}
              onChange={onChange}
            />
          </div>
        <button type="submit" className="btn btn-dark">Register</button>
        <div className="sign-up">
            Already have an account? <Link to='../login'>Login</Link>
        </div>
      </form>
</div>
  )
}

export default Register