// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Welcome'; 
import Profile from './Profile';
import Welcome from './Welcome';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login onLogin={() => setLoggedIn(true)} />}
        />
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route
            path="/*"
            element={<Navigate to="/login" />}
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
