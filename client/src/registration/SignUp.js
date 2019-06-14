import React from 'react';
import axios from 'axios';

export default class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    department: ''
  };

  render() {
    return(
      <>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChanges}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChanges}
              type="password"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="department"
              value={this.state.department}
              onChange={this.handleChanges}
              type="text"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </>
    )
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:4000/api/auth/register';
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res)
        this.props.history.push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }
}