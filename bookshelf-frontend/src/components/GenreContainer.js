import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genres from './Genres';
import { createBook } from "../actions/userbooks";
import {
    fetchGenreBooks,
    fetchGenres  
} from "../actions/nytimes";

class GenreContainer extends Component {

    componentDidMount() {
        this.props.fetchGenres();
    }

    render() {
        return (
            <div>
                <Genres getBooks={this.props.fetchGenreBooks} books={this.props.nytimesBooks} genres={this.props.genres} createBook={this.props.createBook} />
            </div>
        )
  }
}

const mapStateToProps = ({ books, genres }) => ({ books, genres})

export default connect(mapStateToProps, { fetchGenreBooks, fetchGenres, createBook })(GenreContainer);
