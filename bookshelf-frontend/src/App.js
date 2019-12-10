import React from 'react';
import './App.css';
import BooksContainer from './components/BooksContainer'
import UserListContainer from './components/UserListContainer'

function App() {
  return (
    <div className="App">
      <h1>Bookshelf</h1>
      <h2>Browse NY Times Bestsellers and add them to your list to read later!</h2>
      <BooksContainer />
      <UserListContainer />
    </div>
  );
}

export default App;
