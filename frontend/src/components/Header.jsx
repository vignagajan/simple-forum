import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div className="container ms-auto mb-2 mb-lg-0">
      <Link className="navbar-brand" to="/">Forum</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>  
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header