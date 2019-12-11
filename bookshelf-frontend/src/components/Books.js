import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from "./Book.js"

class Books extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
          Books Component
          <h3>{this.props.genres}</h3>
          {/* {this.props.books.map(book => <Book {...book} addBook={this.props.addBook} key={book.id} book={book}/>)} */}
      </div>
    );
  }
};

const mapStateToProps = ({ books, genres }) => ({ books, genres })

export default connect(mapStateToProps)(Books);