import React, { Component } from 'react'
import Books from './Books';

import { connect } from 'react-redux'

class BooksContainer extends Component {

//   fetchBooks method, set global state books list from NYTIMES API


  render() {
    return (
      <div>
        <Books books={this.props.books} addBook={this.props.addBook} deleteBook={this.props.deleteBook}/>
      </div>
    )
  }
}

const mapStateToProps = ({ books }) => ({ books })

const mapDispatchToProps = dispatch => ({
  addBook: bookInfo => dispatch({ type: "ADD_BOOK", bookInfo}),
  delete: bookID => dispatch({type: "DELETE_BOOK", id: bookID})
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
