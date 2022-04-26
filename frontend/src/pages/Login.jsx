import {Link} from 'react-router-dom';
import { useState } from 'react';
import "./login.css"

function Login() {

  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:'',
    cpassword:'',
});

const { username, password } = formData

const onChange = (e) =>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value]
    }))
}
const onSubmit = (e) => {
  e.prevetDefault()
}

  return (

    <div className="login-form">
      <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label><b>Username or email:</b></label>
            <input
              type="text" 
              id="username"
              name="username"
              value={username}
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
        <button type="submit" className="btn btn-dark">Log In</button>
        <div className="sign-up">
            Don't have an account? <Link to='../register'>Create One</Link>
        </div>
      </form>
</div>
  )
}

export default Login