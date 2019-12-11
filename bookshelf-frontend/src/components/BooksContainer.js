import React, { Component } from 'react';
import { connect } from 'react-redux';
import Books from './Books';
import { createBook } from "../actions/userbooks";
import { async } from "async"

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
                }, () => async.mapLimit(data.results, 5, async function(genre) {
                    const response = await fetchBooks(genre)
                    console.log('getting books')
                    return response.body
                }))
            });
    }

    fetchBooks = (genre) => {
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${genre.list_name.replace(/\s+/g,'-').toLowerCase()}.json?api-key=FajJZMrfajSMjU8FfzTVV4UCJVJKWh3z`)
            .then(response => response.json())
            .then(data => {
                console.log("got the data...")

                console.log(data.results)
                this.setState({
                    ...this.state, books: [...this.state.books, data.results]
                })
        })
    }

    componentDidMount() {
        this.fetchGenres();
    }

    render() {
        console.log("BooksContainer state", this.state)
        return (
        <div>
            <Books books={this.state.books} createBook={this.props.createBook} />
        </div>
        )
  }
}

export default connect(null, { createBook })(BooksContainer);
