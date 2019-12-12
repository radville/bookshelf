import React, { Component } from 'react';

class Book extends Component {

  render() {
    const { book } = this.props 
    console.log(book)

    return(
      <div className="card card-inverse card-success card-primary mb-3">
        <li className="card-block">
            <h3><a href={book.amazon_product_url}>{book.title}</a></h3>
            <img className="img-fluid" src={book.book_image} alt={book.title}/>
            <h4>by {book.author}</h4>
            <p>{book.description}</p>
            <button 
                onClick={() => this.props.createBook(book)}
                type="button"
                className="btn btn-primary"
            >
                Add to list
            </button>
        </li>
      </div>
    );
  }
};

export default Book;
