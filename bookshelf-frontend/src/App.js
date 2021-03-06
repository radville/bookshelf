import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import GenresContainer from './containers/GenresContainer'
import UserListContainer from './containers/UserListContainer'
import BooksContainer from './containers/BooksContainer'
import Home from './components/Home'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      currentUser: {}
     };
  }

  // request login status every time App.js is mounted
  componentDidMount() {
    this.loginStatus()
  }

  // get data from server and log user in
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      currentUser: data.user
    })
  }

  // log user out if server says user not logged in
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      currentUser: {}
    })
  }

  // get user data from server
  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    // allow Rails server to set and read the cookie on the front-end’s browser:
    {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
            <Route exact path='/' render={props => (
                <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route exact path="/bestsellers" render={routerProps => (
                <GenresContainer {...routerProps} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route path="/mybooks" render={routerProps => (
                <UserListContainer {...routerProps} currentUser={this.state.currentUser} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route path="/bestsellers/:genre" render={routerProps => (
                <BooksContainer {...routerProps} currentUser={this.state.currentUser} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route exact path='/login' render={props => (
                <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route exact path='/signup' render={props => (
                <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
        </div>
      </Router>
    );}
}

export default App;
