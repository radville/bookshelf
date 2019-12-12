import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from "../components/Book.js"
import { fetchGenreBooks } from "../actions/nytimes";
import { createBook } from "../actions/userbooks";

class BooksContainer extends Component {
  componentDidMount() {
    this.props.fetchGenreBooks(this.props.match.params.genre)
  }

  render() {
    return(
      <div>
          <h3>{this.props.match.params.genre}</h3>
          <ol>
            {this.props.books.map(book => <Book {...book} createBook={this.props.createBook} key={book.primary_isbn10} book={book}/>)}
          </ol>
      </div>
    );
  }
};

const mapStateToProps = ({ books, genres }) => ({ books, genres })

export default connect(mapStateToProps, { fetchGenreBooks, createBook } )(BooksContainer);