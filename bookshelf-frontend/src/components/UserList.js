import React, { Component } from 'react';
import UserBook from "./UserBook.js"

class UserList extends Component {

  render() {
    return(
        <div>
            UserList Component 
            {this.props.userBooks.map(userBook => <UserBook {...userBook} destroyBook={this.props.destroyBook} key={userBook.id} userBook={userBook}/>)}
        </div>
    );
  }
};

export default UserList;