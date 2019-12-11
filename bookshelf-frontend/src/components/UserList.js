import React, { Component } from 'react';
import UserBook from "./UserBook.js"

class UserList extends Component {

  render() {
    //   console.log(this.props.userBooks)
    return(
        <div>
            <h2>My books list</h2>
            <ul>
                {this.props.userBooks.map(userBook => <UserBook {...userBook} destroyBook={this.props.destroyBook} key={userBook.id} userBook={userBook}/>)}
            </ul>
        </div>
    );
  }
};

export default UserList;