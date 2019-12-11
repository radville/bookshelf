import React, { Component } from 'react';

class Book extends Component {

  render() {
    const { book } = this.props 
    return(
      <div className="card card-inverse card-success card-primary mb-3">
        Book component
        <div className="card-block">
            <h2><a href={book.url}>{book.title}</a></h2>
            <h3>by {book.author}</h3>
            <p>{book.description}</p>
            <button 
                onClick={() => this.props.addBook(book.id)}
                type="button"
                className="btn btn-primary"
            >
                Add to list
            </button>
        </div>
      </div>
    );
  }
};

export default Book;
