import React, { Component } from 'react'
import UserList from './UserList';

import { connect } from 'react-redux'

class UserListContainer extends Component {
  render() {
    return (
      <div>
        <UserList userBooks={this.props.userBooks} deleteBook={this.props.deleteBook}/>
      </div>
    )
  }
}

const mapStateToProps = ({ userBooks }) => ({ userBooks })

const mapDispatchToProps = dispatch => ({
  deleteBook: bookID => dispatch({type: "DELETE_BOOK", id: bookID})
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)
