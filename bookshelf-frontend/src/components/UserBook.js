import React, { Component } from 'react';

class UserBook extends Component {

  render() {
    const { userBook } = this.props 
    return(
      <div>
        <li>
            <h3>{userBook.title}</h3>
            <h4>By {userBook.author}</h4>
            <button onClick={() => this.props.deleteBook(userBook.id)}>Delete</button>
        </li>
      </div>
    );
  }
};

export default UserBook;
