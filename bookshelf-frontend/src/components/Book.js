import React, { Component } from 'react';

class Book extends Component {

  render() {
    const { book } = this.props 
    return(
      <div className="card card-inverse card-success card-primary mb-3">
        <div className="card-block">
            <h3><a href={book.url}>{book.title}</a></h3>
            <h4>by {book.author}</h4>
            <p>{book.description}</p>
            <button 
                onClick={() => this.props.createBook(book.id)}
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
