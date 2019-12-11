import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Genres extends Component {

    render() {
        return(
            <div className="container">
                <h3>Select a genre to see bestsellers</h3>
                <div className="col-15">
                    <div className="d-flex flex-row flex-wrap"> 
                    {this.props.genres.map(genre => 
                        <div className="list-group-item w-50 list-group-item-action" 
                            // onClick={()=>{this.props.fetchGenreBooks(genre)}}
                        >
                            {genre}
                            <Link to={`/bestsellers/${genre}`}>Link</Link>
                        </div>
                        
                    )}
                    </div>
                </div>
            </div>
        );
    }
};

export default Genres;