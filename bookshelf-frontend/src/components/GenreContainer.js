import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genres from './Genres';
import { createBook } from "../actions/userbooks";

class GenreContainer extends Component {

    state = {
        genres: [],
        books: []
    }

    getBooks = (genre) => {
        const slug = genre.replace(/\s+/g, '-').toLowerCase();

        fetch(`http://localhost:3000/bestsellers/${slug}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    books: data})
            });
        
        window.location.href= `/books/${slug}`
        
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

    componentDidMount() {
        this.fetchGenres();
    }

    render() {
        return (
            <div>
                <Genres getBooks={this.getBooks} genres={this.state.genres} createBook={this.props.createBook} />
            </div>
        )
  }
}

export default connect(null, { createBook })(GenreContainer);
