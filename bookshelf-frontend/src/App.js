import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import BooksContainer from './components/BooksContainer'
import UserListContainer from './components/UserListContainer'
import 'bootstrap/dist/css/bootstrap.css';

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
        <Route path="/books" render={routerProps => <BooksContainer {...routerProps}/>}/>
        <Route path="/mylist" render={routerProps => <UserListContainer {...routerProps}/>}/>
      </div>
    </Router>
  );
}

export default App;
