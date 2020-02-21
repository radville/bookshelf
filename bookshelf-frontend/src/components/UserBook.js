import React, { Component } from 'react';

class UserBook extends Component {

  readMessage = () => {
    if (this.props.read === false) {
      return "Mark Read"
    } else { 
      return "Mark Unread"
    }
  }

  readToggle = userBook => {
    this.props.readToggle(userBook)
  }

  render() {
    const { userBook } = this.props
    return(
      <div>
        <div 
          className="list-group-item list-group-item"
          style={{maxWidth: "30vw", textDecoration: userBook.read ? 'line-through' : 'none'}}
        >
            <h5><a href={userBook.amazon_product_url}>{userBook.title}</a></h5>
            <h6>by {userBook.author}</h6>
            <img className="img-fluid" src={userBook.book_image} alt={userBook.title} style={{maxWidth: "10vw"}}/>
            <div></div>
            <button 
                type="button" 
                onClick={() => this.props.destroyBook(userBook.id)}
                className="btn btn-primary"
            >
                Delete
            </button>
            <button 
                type="button" 
                onClick={() => this.readToggle(userBook)}
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
