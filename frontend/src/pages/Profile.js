// // import {useContext} from 'react'
// // import { AuthContext } from '../context/AuthContext'

// // export default function Profile() 
// // {
// //   const {current_user,} = useContext(AuthContext)
  
// //   console.log("Current user in profile ", current_user)
// //   return (
// //     <div>
     
// //    <div> 
// //     {current_user && current_user}
// //     <h1>Profile</h1>
// //       <h5>Username : {current_user && current_user.name}</h5>
// //       <h5>Email : {current_user && current_user.email}</h5>
// //       <h5>Date Joined : {current_user && current_user.created_at}</h5>
// //    </div>  

// //     </div>
// //   )
// // }
// import { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// export default function Profile() {
//   const { current_user } = useContext(AuthContext);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     fetch('/current_user')
//       .then(response => response.json())
//       .then(data => {
//         setUserData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching current user:', error);
//       });
//   }, []);

//   console.log('Current user in profile', current_user);

//   return (
//     <div>
//       <div>
//         {userData && (
//           <>
//             <h1>Profile</h1>
//             <h5>Username: {userData.name}</h5>
//             <h5>Email: {userData.email}</h5>
//             <h5>Date Joined: {userData.created_at}</h5>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {
  const { current_user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:9292/current_user')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching current user:', error);
      });
  }, []);

  console.log('Current user in profile', current_user);

  // Check if current_user and userData exist and match
  const isAuthenticatedUser = current_user && userData && current_user.name === userData.name;

  return (
    <div>
      <div>
        {isAuthenticatedUser ? (
          <>
            <h1>Profile</h1>
            <h5>Username: {userData.name}</h5>
            <h5>Email: {userData.email}</h5>
            <h5>Date Joined: {userData.created_at}</h5>
          </>
        ) : (
          <p>You are not authorized to view this profile.</p>
        )}
      </div>
    </div>
  );
}
