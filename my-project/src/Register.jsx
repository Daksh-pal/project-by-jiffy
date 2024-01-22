// src/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', {
        username,
        password,
      });

      if (response.data.success) {
        setMessage('Registration successful!');
        // Redirect to the login page after successful registration
        navigate('/login');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      setMessage('Error during registration. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4 max-w-xs bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>

      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
          Username
        </label>
        <input
          type="text"
          id="username"
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
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        onClick={handleRegister}
      >
        Register
      </button>
      
      <div>
        Already have an account!
        <Link to="/login" className="text-blue-500 ">
          Login
        </Link>
      </div>

      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default Register;
