// src/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h2>Sri Laxmi Narashima Filling Station Pallikonda </h2>
      <h1>Fuel Station Cash Management</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/summary">Summary</Link>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#282c34',
  padding: '10px',
  textAlign: 'center',
  color: 'white',
};

export default Header;
