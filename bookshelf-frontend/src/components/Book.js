import React, { Component } from 'react';
import BookCard from './BookCard'

class Book extends Component {
  
  addBook = (book) => {
    this.props.createBook(book)
    window.location.href = "/mybooks";
  }

  render() {
    const { book } = this.props 

    return(
      < BookCard currentUser={this.props.currentUser} addBook={this.addBook} upvote={this.upvote} book={book} />
    );
  }
};

export default Book;
