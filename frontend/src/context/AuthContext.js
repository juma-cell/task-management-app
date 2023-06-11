import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [onChange, setOnChange] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Login
  const login = (name, password) => {
    fetch('https://tasks-5n2l.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire('Error', response.error, 'error');
        } else if (response.success) {
          nav('/');
          Swal.fire('Success', response.success, 'success');
          setOnChange(!onChange);
        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
      });
  };

  // Logout
  const logout = () => {
    fetch('https://tasks-5n2l.onrender.com/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        Swal.fire('Success', response.success, 'success');
        nav('/login');
        setCurrentUser(null);
        setOnChange(!onChange);
      });
  };

  // Signup
  const signup = (name, email, password) => {
    fetch('https://tasks-5n2l.onrender.com/addusers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire('Success', response.success, 'success');
        } else if (response.success) {
          
          Swal.fire('Error', response.error, 'error');
          
        } else {
          Swal.fire('Success', response.success, 'success');
        }
      })
    
  };

  // Fetch current user
  useEffect(() => {
    fetch('https://tasks-5n2l.onrender.com/current_user', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.currentUser) {
          setCurrentUser(response.currentUser);
        }
      });
  }, [onChange]);

  const authContextValue = {
    currentUser,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
