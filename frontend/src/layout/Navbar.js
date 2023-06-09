import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Navbar() 
{
  const {current_user, logout} = useContext(AuthContext)

  console.log("CURRENT USER IN NAVBAR ", current_user)

  return (
    <div>
<nav className="navbar navbar-dark bg-primary">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>

      {current_user && current_user?
        <>
               <li className="nav-item">
          <Link to="/addTask" className="nav-link active" >Add Task</Link>
        </li>
        </>:
        <>
        <li className="nav-item">
          <Link to="/login" className="nav-link active" >Login</Link>
        </li>
         <li className="nav-item">
          <Link to="/addTask" className="nav-link active" >Add Task</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link active" >Sign up</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/profile" className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More Options
            <ul className="dropdown-menu">
            
            <li className="dropdown-item" href="#">{current_user && current_user.username}</li>
            <li><hr className="dropdown-divider" />   </li>
         
            <li className="dropdown-item" onClick={()=>logout()}>Logout</li>
          </ul>
          </Link> 
        </li>
        
        </>
       }



       
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}
