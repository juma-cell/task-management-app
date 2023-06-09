import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password);
    navigate('/login'); 
  };

  return (
    <div className="container column mt-6">
      <form className="col-sm-6  p-4 mt-5 border" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="row mt-3">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div className="row mt-3">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="row mt-3">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="mt-3 btn btn-success">
          Sign Up
        </button>
      </form>
    </div>
  );
}
