import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Login() 
{
    const {login} = useContext(AuthContext)
    
    const [name, setname] = useState()
    const [password, setPassword] = useState()


    const  handleSubmit = (e) =>{
        e.preventDefault()

      login(name, password)
    }
  return (
    <div className='container column mt-6'>
        
        <form className='col-sm-6 p-4 mt-5 border' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="row mt-3">
                <label>name</label>
                <input type="text" onChange={(e)=> setname(e.target.value) } className="form-control" placeholder="Enter name" />
            </div>
            <div className="row mt-3">
                <label>Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value) } className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="mt-3 btn btn-success">Login</button>
        </form>

        <div className='col-sm-6'></div>
    </div>
  )
}
