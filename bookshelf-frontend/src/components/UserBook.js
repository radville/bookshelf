import React, { Component } from 'react';

class UserBook extends Component {

  readMessage = () => {
    if (this.props.read === false) {
      return "Mark Read"
    } else { 
      return "Mark Unread"
    }
  }

  readToggle = () => {
    this.props.readToggle()
  }

  render() {
    const { userBook } = this.props
    return(
      <div>
        <div className="list-group-item w-50 list-group-item" >
            <h5><a href={userBook.amazon_product_url}>{userBook.title}</a></h5>
            <h6>by {userBook.author}</h6>
            <img className="img-fluid" src={userBook.book_image} alt={userBook.title} />
            <button 
                type="button" 
                onClick={() => this.props.destroyBook(userBook.id)}
                className="btn btn-primary"
            >
                Delete
            </button>
            <button 
                type="button" 
                onClick={() => this.readToggle()}
                className="btn btn-primary"
            >
              {this.readMessage()}
            </button>
        </div>
      </div>
    );
  }
};

export default UserBook;
