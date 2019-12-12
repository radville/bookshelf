import React, { Component } from 'react';
import UserBook from "./UserBook.js"

class UserList extends Component {
  render() {
    return(
      <div>
        <h2>My books</h2>
        <div className="row">
          {this.props.userBooks.map(userBook => <UserBook {...userBook} destroyBook={this.props.destroyBook} readToggle={this.props.readToggle} key={userBook.id} userBook={userBook}/>)}
        </div>
      </div>
    );
  }
};

export default UserList;