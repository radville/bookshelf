import React, { Component } from 'react';

class UserBook extends Component {

  render() {
    const { userBook } = this.props 
    return(
      <div>
        <li>
            <h3>{userBook.title}</h3>
            <div>By {userBook.author}</div>
            <button 
                type="button" 
                onClick={() => this.props.destroyBook(userBook.id)}
                className="btn btn-primary"
            >
                Delete
            </button>
        </li>
      </div>
    );
  }
};

export default UserBook;
