import {Link} from 'react-router-dom';
import { useState } from 'react';
import "./login.css"

function Login() {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div className="login-form">
      <form method="post">
          <div className="form-group"> 
            <label><b>Username or email:</b></label>
            <input
              type="text" 
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group"> 
            <label><b>Password:</b></label>
            <input
              type="text" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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