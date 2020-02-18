import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {

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
        <div>
            <h2>Bookshelf</h2>
            <h4>Browse NY Times Bestsellers and add them to your list to read later!</h4>

            <Link to='/login'>Log In</Link>
            <br></br>
            <Link to='/signup'>Sign Up</Link>
            <br></br>
            { 
                props.loggedInStatus ? 
                <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
                null
            }
        </div>
    );
};

export default Home;