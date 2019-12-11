import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Bookshelf
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/bestsellers"
      >
        Bestsellers
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/mybooks"
      >
        My books
      </NavLink>
    </div>
  );
}

export default NavBar;
