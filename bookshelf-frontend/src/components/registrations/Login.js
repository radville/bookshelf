import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            password: '',
            errors: ''
        };
    }

    // redirect if the user is already logged in
    componentDidMount() {
        return this.props.loggedInStatus ? this.redirect() : null
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    };

    // create user object based on state, then post to Rails server
    handleSubmit = (event) => {
        event.preventDefault()
        const {username, email, password} = this.state

        let user = {
            username: username,
            email: email,
            password: password
        }

        // allows rails to set cookie
        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(response => {
            if (response.data.logged_in) {
                this.props.handleLogin(response.data)
                this.redirect()
            } else {
                this.setState({
                    errors: response.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
    };

    // if user is authenticated, redirect to home page
    redirect = () => {
        this.props.history.push('/')
    }

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.map(error => {
                        return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        const {username, email, password} = this.state

        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button placeholder="submit" type="submit">
                        Log In
                    </button>
                    <div>
                        or <Link to='/signup'>sign up</Link>
                    </div>
                </form>

                <div>
                    {
                        this.state.errors ? this.handleErrors() : null
                    }
                </div>
            </div>
        );
    }
}

export default Login;