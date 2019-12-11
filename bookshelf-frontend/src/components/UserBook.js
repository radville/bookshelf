import React, { Component } from 'react';

class UserBook extends Component {

  render() {
    const { userBook } = this.props 
    return(
      <div>
        <div className="list-group-item w-50 list-group-item" >
            <h5>{userBook.title}</h5>
            <div>By {userBook.author}</div>
            <button 
                type="button" 
                onClick={() => this.props.destroyBook(userBook.id)}
                className="btn btn-primary"
            >
                Delete
            </button>
        </div>
      </div>
    );
  }
};

export default UserBook;
