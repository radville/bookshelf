import React, { Component } from 'react'
import Books from './Books';

import { connect } from 'react-redux'

class BooksContainer extends Component {

    state = {
        books: [],
        genres: []
    }

    fetchGenres = () => {
        fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=FajJZMrfajSMjU8FfzTVV4UCJVJKWh3z')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    genres: data.results
                })
            })
    }

    fetchBooks = () => {
        this.state.genres.map(genre =>
            fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=FajJZMrfajSMjU8FfzTVV4UCJVJKWh3z`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    books: data.results
                })
            })
        )
    }

    componentDidMount() {
        this.fetchGenres();
        this.fetchBooks();
    }

    render() {
        return (
        <div>
            <Books books={this.state.books} addBook={this.props.addBook} deleteBook={this.props.deleteBook}/>
        </div>
        )
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: bookInfo => dispatch({ type: "ADD_BOOK", bookInfo}),
  delete: bookID => dispatch({type: "DELETE_BOOK", id: bookID})
})

export default connect(null, mapDispatchToProps)(BooksContainer)
