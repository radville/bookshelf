import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genres from './Genres';
import { createBook } from "../actions/userbooks";

class BooksContainer extends Component {

    state = {
        books: [],
        genres: []
    }

    fetchGenres = () => {
        fetch('http://localhost:3000/genres')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    genres: data
                })
            });
    }

    fetchBooks = (genre) => {
        fetch(``)
            .then(response => response.json())
            .then(data => {

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
        return (
            <div>
                <Genres genres={this.state.genres} createBook={this.props.createBook} />
            </div>
        )
  }
}

export default connect(null, { createBook })(BooksContainer);
