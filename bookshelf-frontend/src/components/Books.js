import React, { Component } from 'react';
import Book from "./Book.js"

class Books extends Component {

  render() {
    return(
      <div>
          Books Component
        {this.props.books.map(book => <Book {...book} addBook={this.props.addBook} key={book.id} book={book}/>)}
      </div>
    );
  }
};

export default Books;