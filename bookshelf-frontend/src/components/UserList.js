import React, { Component } from 'react';
import UserBook from "./UserBook.js"

class UserList extends Component {

  render() {
    return(
      <div>
        {this.props.userBooks.map(userBook => <UserBook {...userBook} deleteBook={this.props.deleteBook} key={userBook.id} userBook={userBook}/>)}
      </div>
    );
  }
};

export default UserList;