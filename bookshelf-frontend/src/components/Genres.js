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
            <div className="container">
                <h3>Select a genre to see bestsellers</h3>
                <div className="col-15">
                    <div className="d-flex flex-row flex-wrap"> 
                    {this.props.genres.map(genre => 
                        <div className="list-group-item w-50 list-group-item-action" onClick={()=>{this.getBooks(genre)}}>
                            {genre}
                        </div>
                        
                    )}
                    </div>
                </div>
            </div>
        );
    }
};

export default Genres;