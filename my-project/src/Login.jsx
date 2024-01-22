// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Login = ({ onLogin }) => { // Pass onLogin as a prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });

      if (response.data.success) {
        setMessage('Login successful!');
        onLogin(); 
        navigate('/profile');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setMessage('Error during login. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4 max-w-xs bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        onClick={handleLogin}
      >
        Login
      </button>
      <div>
        Don't have an account?
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </div>

      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default Login;
