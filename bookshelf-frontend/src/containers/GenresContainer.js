import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genres from '../components/Genres';
import { fetchGenres } from "../actions/nytimes";

class GenresContainer extends Component {

    componentDidMount() {
        this.props.fetchGenres();
    }

    render() {
        return (
            <div>
                <Genres fetchGenreBooks={this.props.fetchGenreBooks} genres={this.props.genres} />
            </div>
        )
  }
}

const mapStateToProps = ({ genres }) => ({ genres})

export default connect(mapStateToProps, { fetchGenres })(GenresContainer);
