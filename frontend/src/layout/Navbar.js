
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export default function Navbar() {
  const {logout } = useContext(AuthContext);
  return (
    <ul className="nav nav-tabs ">
      <li className="nav-item">
        <a className="nav-link " aria-current="page" href="/">
          Home
        </a>
      </li>
      <li className="nav-item dropdown">
        <li className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
          More options
        </li>
        <ul className="dropdown-menu">
          <li>
          <Link to="/addTask" className="nav-link active">
            Add Task
          </Link>
          </li>
          <li>
          <Link to="/signup" className="nav-link active">
                      Sign up
                    </Link>
          </li>
          <li>
          <Link to="/login" className="nav-link active">
                      Login
                    </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
          <li className="dropdown-item" onClick={() => logout()} style={{ color: 'brown' }}>
            Logout
          </li>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/profile">
          profile
        </a>
      </li>
      <li className="nav-item">
        
      </li>
    </ul>
  );
}
