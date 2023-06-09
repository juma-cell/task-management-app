import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [onChange, setOnChange] = useState(false);
  const [current_user, set_currentUser] = useState(null);

  // Login
  const login = (name, password) => {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
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
    fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        Swal.fire('Success', response.success, 'success');
        nav('/login');
        set_currentUser(null);
        setOnChange(!onChange);
      });
  };

  // Fetch current user
  useEffect(() => {
    fetch('/current_user', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.currentUser) {
          set_currentUser(response.currentUser);
        }
      });
  }, [onChange]);

  const contextData = {
    current_user,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}
