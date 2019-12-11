import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from "./Book.js"

class BooksContainer extends Component {
  render() {
    console.log("bookscontainer", this.props)
    return(
      <div>
          BooksContainer Component
          <h3>{this.props.match.params.genre}</h3>
          {/* {this.props.books.map(book => <Book {...book} addBook={this.props.addBook} key={book.id} book={book}/>)} */}
      </div>
    );
  }
};

const mapStateToProps = ({ books, genres }) => ({ books, genres })

export default connect(mapStateToProps)(BooksContainer);