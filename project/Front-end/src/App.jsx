import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Forgot from './Pages/Forgot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<div>Register Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;