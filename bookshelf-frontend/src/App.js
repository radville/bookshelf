import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import GenreContainer from './components/GenreContainer'
import UserListContainer from './components/UserListContainer'
import BooksContainer from './components/BooksContainer'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => 
          <div>
            <h1>Bookshelf</h1>
            <h2>Browse NY Times Bestsellers and add them to your list to read later!</h2>
          </div>}
        />
        <Route exact path="/bestsellers" render={routerProps => <GenreContainer {...routerProps}/>}/>
        <Route path="/mybooks" render={routerProps => <UserListContainer {...routerProps}/>}/>
        <Route path="/bestsellers/:genre" render={routerProps => <BooksContainer {...routerProps}/>}/>
      </div>
    </Router>
  );
}

export default App;
