import React, { useContext } from 'react'
import image3 from "../images/image3.jpeg"
import image9 from "../images/image9.jpeg"
import { useParams } from 'react-router-dom'
import { TaskContext } from '../context/TaskContext'
import { AuthContext } from '../context/AuthContext'
export default function Task() 
{
  const {tasks, deleteTask} = useContext(TaskContext)
  const {current_user} = useContext(AuthContext)

  const {id} = useParams()
  const singleTask = tasks && tasks.find(task =>(
    task.id===id
  ))

  console.log(singleTask)


  return (
    <div className='container mx-auto'>
        <h4>{singleTask && singleTask.title}</h4>
        <div className='row gx-5'>
            <div className='col-lg-8 bg-light'>
              <img src={image3} className='img-fluid' alt='' />
             
              <div className='d-flex mt-4 gap-5 '>
                <p>Author: {singleTask && singleTask.user.username}</p>
                <p>Date Task added: {singleTask && singleTask.created_at }</p>             
                {current_user && current_user.username===singleTask.user.username?
                <>
                <button className='btn btn-success btn-sm'>Edit</button>
                <button onClick={()=>deleteTask(singleTask.id)} className='btn btn-danger btn-sm'>Delete</button>
                </>:""
                }
                </div>
              <p className='mt-3'>
              {singleTask && singleTask.content}
                </p>
            </div>


            <div className='col-lg-4'>
            <div className='card p-2'>
                <h5 className='fw-thin mt-5'>About This Task</h5>
               <img src={image9} className='img-fluid' alt='' />
            </div>
            </div>
        </div>
    </div>
  )
}
