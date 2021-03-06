import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Book extends Component {
  
  addBook = (book) => {
    this.props.createBook(book);
    // set 1 second delay so reducer has time to create book in database
    setTimeout(() => this.props.history.push('/mybooks'), 1000)
  }

  render() {
    const { book } = this.props 

    return(
      <div key={book.key} className="card bg-light mb-3">
        <li key={book.primary_isbn10} className="card-block">
          <div className="card-body">
            <a href={book.amazon_product_url} style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              {book.title}
            </a>
            <div className="card-title" style={{fontWeight: "bold"}}>by {book.author}</div>
            <img className="img-fluid" src={book.book_image} alt={book.title} style={{maxHeight: "20vw"}}/>
            <p className="card-text">{book.description}</p>
            <button 
                onClick={() => this.addBook(book)}
                type="button"
                className="btn btn-primary"
            >
                Add to list
            </button>
          </div>
        </li>
      </div>
    );
  }
};

export default withRouter(Book);
