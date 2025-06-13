import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav>
      <Link to="/">🏠 Home</Link>

      <Link to="/upload">⬆️ Upload</Link>
      <Link to="/admin">🛠 Admin</Link>
      <Link to="/edit">✏️ Documents</Link>
      <button onClick={toggleTheme} style={{ marginLeft: 'auto' }}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}

export default Navbar;
