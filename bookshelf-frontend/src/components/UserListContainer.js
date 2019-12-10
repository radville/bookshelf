import React, { Component } from 'react'
import UserList from './UserList';
import { connect } from 'react-redux'
import {
    destroyBook,
    fetchUserBooks    
} from "../actions/userbooks";

class UserListContainer extends Component {
    componentDidMount() {
        this.props.fetchUserBooks();
    }

    render() {
        // console.log(this.props)
        return (
        <div>
            <UserList userBooks={this.props.userBooks} destroyBook={this.props.destroyBook}/>
        </div>
        )
    }
}

const mapStateToProps = ({ userBooks }) => ({ userBooks })

export default connect(mapStateToProps, { destroyBook, fetchUserBooks })(UserListContainer)
