import React, { Component } from 'react'
import UserList from '../components/UserList';
import { connect } from 'react-redux'
import {
    destroyBook,
    fetchUserBooks,
    readToggle   
} from "../actions/userbooks";

class UserListContainer extends Component {
    componentDidMount() {
        this.props.fetchUserBooks();
    }

    render() {
        console.log(this.props.currentUser)
        return (
            <div>
                <UserList currentUser={this.props.currentUser} userBooks={this.props.userBooks} destroyBook={this.props.destroyBook} readToggle={this.props.readToggle}/>
            </div>
        )
    }
}

const mapStateToProps = ({ userBooks }) => ({ userBooks })

export default connect(mapStateToProps, { destroyBook, fetchUserBooks, readToggle })(UserListContainer)
