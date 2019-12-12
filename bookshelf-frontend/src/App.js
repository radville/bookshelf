import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import GenreContainer from './containers/GenreContainer'
import UserListContainer from './containers/UserListContainer'
import BooksContainer from './containers/BooksContainer'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => 
          <div>
            <h2>Bookshelf</h2>
            <h4>Browse NY Times Bestsellers and add them to your list to read later!</h4>
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
