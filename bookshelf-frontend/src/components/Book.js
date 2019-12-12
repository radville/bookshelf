import React, { Component } from 'react';

class Book extends Component {

  render() {
    const { book } = this.props 
    return(
      <div key={book.id} className="card bg-light mb-3">
        <li className="card-block">
          <div className="card-body">
            <a href={book.amazon_product_url} style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              {book.title}
            </a>
            <div className="card-title" style={{fontWeight: "bold"}}>by {book.author}</div>
            <img className="img-fluid" src={book.book_image} alt={book.title} style={{maxHeight: "20vw"}}/>
            <p className="card-text">{book.description}</p>
            <button 
                onClick={() => this.props.createBook(book)}
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

export default Book;
