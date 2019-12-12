import React from 'react';

import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    // <div style={{ background: "#505050", borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
    //   <NavLink 
    //     style={{ fontWeight: "bold", marginRight: '10vw', textDecoration: 'none', color: "white" }} 
    //     to="/"
    //   >
    //     Home
    //   </NavLink>
    //   <NavLink 
    //     style={{ fontWeight: "bold", marginRight: '10vw', textDecoration: 'none', color: "white"  }} 
    //     to="/bestsellers"
    //   >
    //     Bestsellers
    //   </NavLink>
    //   <NavLink 
    //     style={{ fontWeight: "bold", marginRight: '10vw', textDecoration: 'none', color: "white" }} 
    //     to="/mybooks"
    //   >
    //     My books
    //   </NavLink>
    // </div>

    <Nav className="mr-auto" style={{ background: "#505050", borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <Nav.Item style={{ fontWeight: "bold", fontSize: "1.2em", marginRight: '10vw', color: "white" }}>
            BOOKSHELF
        </Nav.Item>
        <NavLink 
            style={{ marginRight: '10vw', textDecoration: 'none', color: "white"  }} 
            to="/bestsellers"
        >
            Bestsellers
        </NavLink>
        <NavLink 
            style={{ marginRight: '10vw', textDecoration: 'none', color: "white" }} 
            to="/mybooks"
        >
            My books
        </NavLink>
        {/* <Nav.Link href="#link">Link</Nav.Link> */}
    </Nav>
  );
}

export default NavBar;
