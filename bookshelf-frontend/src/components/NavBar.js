import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/books"
      >
        Bestsellers
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/mylist"
      >
        My books
      </NavLink>
    </div>
  );
}

export default NavBar;
