import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {
  const { current_user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/current_user')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setLoading();
      })
      .catch(error => {
        console.error('Error fetching current user:', error);
        setLoading();
      });
  }, []);

  if (loading) {
    return <p>Loading user data....</p>;
  }

  if (current_user && userData && current_user.name === userData.name) {
    // User is authorized to view the profile
    // Render the profile content here
  } else {
    return   <div>
    <h1>Profile</h1>
    <h5>Username: {userData.name}</h5>
    <h5>Email: {userData.email}</h5>
    <h5>Date Joined: {userData.created_at}</h5>
  </div>
  }
  
}
