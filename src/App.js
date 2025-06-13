import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';

import AdminDashboard from './pages/AdminDashboard';
import Documents from './pages/Documents';
import Navbar from './components/Navbar'; // ✅ import navbar


function App() {
  return (
    <Router>
      <Navbar />  {/* ✅ show navbar on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/edit" element={<Documents />} />
      </Routes>
    </Router>
  );
}

export default App;
