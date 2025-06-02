import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  backgroundColor: '#1f1f1f',
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#bb86fc',
  boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
};

const linkStyle = {
  color: '#bb86fc',
  textDecoration: 'none',
  marginLeft: '15px',
  fontWeight: 'bold',
};

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Todo Dark</div>
      <div>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/add-item" style={linkStyle}>Add Todo</a>
      </div>
    </nav>
  );
};

export default Navbar;
