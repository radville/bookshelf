import React, { Component } from 'react';
import BookCard from './BookCard'

class Book extends Component {
  
  state = {votes: 0}

  addBook = (book) => {
    this.props.createBook(book)
    window.location.href = "/mybooks";
  }

  render() {
    const { book } = this.props 

    return(
      < BookCard votes={this.state.votes} addBook={this.addBook} upvote={this.upvote} book={book} />
    );
  }
};

export default Book;
