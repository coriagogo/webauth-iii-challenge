import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import UserList from './users/UserList';
import Login from './auth/Login';
import SignUp from './registration/SignUp';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/users">users</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/users" component={UserList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </main>
        
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  }
}

export default withRouter(App);
