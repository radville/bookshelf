import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavBar = (props) => {

    // logout functionality
    const handleClick = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
        .then(response => {
            props.handleLogout()
            props.history.push('/')
        })
        .catch(error => console.log(error))
    }

    return (
        <Nav className="mr-auto" style={{ background: "#505050", borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
            <NavLink 
                style={{ fontWeight: "bold", fontSize: "1.2em", marginRight: '10vw', color: "white" }}
                to="/"
            >
                BOOKSHELF
            </NavLink>
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
            <NavLink 
                style={{ marginRight: '10vw', textDecoration: 'none', color: "white" }} 
                to='/login'
            >
                Log In
            </NavLink>
            <NavLink 
                style={{ marginRight: '10vw', textDecoration: 'none', color: "white" }} 
                to='/signup'
            >
                Sign Up
            </NavLink>
            { 
                props.loggedInStatus ? 
                <NavLink 
                    style={{ marginRight: '10vw', textDecoration: 'none', color: "white" }} 
                    to='/logout'
                    onClick={handleClick}
                >
                        Log Out
                </NavLink> : 
                null
            }
        </Nav>
    );
}

export default NavBar;
