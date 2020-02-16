import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h2>Bookshelf</h2>
        <h4>Browse NY Times Bestsellers and add them to your list to read later!</h4>
        
        <Link to='/login'>Log In</Link>
        <br></br>
        <Link to='/signup'>Sign Up</Link>
    </div>
  );
};

export default Home;