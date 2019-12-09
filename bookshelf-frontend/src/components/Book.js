import React, { Component } from 'react';

class Book extends Component {

  render() {
    const { book } = this.props 
    return(
      <div>
        <li>
            {book.title}
            <button onClick={() => this.props.addBook(book.id)}>Add to List</button>
        </li>
      </div>
    );
  }
};

export default Book;
