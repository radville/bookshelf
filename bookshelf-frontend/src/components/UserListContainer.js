import React, { Component } from 'react'
import UserList from './UserList';
import { connect } from 'react-redux'
import {
    destroyBook,
    fetchBooks    
} from "../actions/userbooks";

class UserListContainer extends Component {
  render() {
    return (
      <div>
        <UserList userBooks={this.props.userBooks} destroyBook={this.props.destroyBook}/>
      </div>
    )
  }
}

const mapStateToProps = ({ userBooks }) => ({ userBooks })

export default connect(mapStateToProps, { destroyBook, fetchBooks })(UserListContainer)
