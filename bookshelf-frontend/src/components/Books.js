import React, { Component } from 'react';
import Book from "./Book.js"

class Books extends Component {
  render() {
    console.log("books component")
    return(
      <div>
          Books Component
          <h3>{this.props.genre}</h3>
          {/* {this.props.books.map(book => <Book {...book} addBook={this.props.addBook} key={book.id} book={book}/>)} */}
      </div>
    );
  }
};

export default Books;