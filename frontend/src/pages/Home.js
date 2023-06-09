import image4 from "../images/image4.jpeg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export default function Home() 
{
  const {tasks} = useContext(TaskContext)
  return (
    <div>
      <h1 className='text-center'>Your Available Tasks At the Moment</h1>
      <div className='container-fluid row'>

        {
          tasks && tasks.length<1?
          <div className="text-info">
            There are no Task at the moment
          </div>:""
        }

      {tasks && tasks.map((task)=>(

      
        <div className='col-6 col-sm-6 col-md-4 mb-5'>
          <div className="card">
            <div className="overflow-hidden" style={{"height":"30vh"}}>
            <img src={image4} className="card-img-top" alt="img loading..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">{task.content}</p>
              <Link to={`/task/${task.id}`} href="#" className="btn btn-success btn-sm w-100">Read More</Link>
            </div>
          </div>
        </div>
        ))
        }



      </div>
    </div>
  )
}
