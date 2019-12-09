import React, { Component } from 'react';

class UserBook extends Component {

  render() {
    const { userBook } = this.props 
    return(
      <div>
        <li>
            {userBook.title}
            {userBook.author}
            <button onClick={() => this.props.deleteBook(userBook.id)}>Delete</button>
        </li>
      </div>
    );
  }
};

export default UserBook;
