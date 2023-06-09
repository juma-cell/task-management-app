import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Profile() 
{
  const {current_user,} = useContext(AuthContext)
  
  console.log("Current user in profile ", current_user)
  return (
    <div>
      {current_user && current_user?
      <>
      <h1>Profile</h1>
      <h5>Username : {current_user && current_user.name}</h5>
      <h5>Email : {current_user && current_user.email}</h5>
      <h5>Date Joined : {current_user && current_user.created_at}</h5>
   </>:
   <div>
    
   </div>
}
    </div>
  )
}
