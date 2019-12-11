import React, { Component } from 'react';
import Books from "./Books.js"
import { Route } from 'react-router-dom';

class Genres extends Component {
    getBooks(genre) {
        const slug = genre.replace(/\s+/g, '-').toLowerCase();
        fetch(`http://localhost:3000/bestsellers/${slug}`)
            .then(response => response.json())
            .then(data => {
                console.log("fetch books", data);
                let bookList = data.response;
                return (<Route path={`./books/${genre}`} render={ routerProps => 
                    <Books {...routerProps} books={bookList} genre={genre} createBook={this.props.createBook} />}
                />)
            });
}

    render() {
        return(
            <div>
                <h3>Select a genre to see bestsellers</h3>
                <div className="card">
                    {this.props.genres.map(genre => 
                        <div className="card-block">
                            <button
                                onClick={() => {this.getBooks(genre)}}
                                type="button"
                                className="btn btn-primary"
                            >
                                {genre}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export default Genres;