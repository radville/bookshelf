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
                        <Link to={`/bestsellers/${genre}`} className="list-group-item w-50 list-group-item-action">{genre}</Link>
                    )}
                    </div>
                </div>
            </div>
        );
    }
};

export default Genres;