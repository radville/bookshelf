import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genres from '../components/Genres';
import { fetchGenres } from "../actions/nytimes";

class GenresContainer extends Component {

    componentDidMount() {
        if (this.props.loggedInStatus === true) {this.props.fetchGenres()}
    }

    render() {
        if (this.props.loggedInStatus === true) {return (
            <div>
                <Genres fetchGenreBooks={this.props.fetchGenreBooks} genres={this.props.genres} />
            </div>
        )} else {
            return (
                <div>
                    Please log in to see bestsellers.
                </div>
            )
        }
  }
}

const mapStateToProps = ({ genres }) => ({ genres})

export default connect(mapStateToProps, { fetchGenres })(GenresContainer);
