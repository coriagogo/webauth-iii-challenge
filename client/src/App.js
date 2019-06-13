import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/users">users</NavLink>
            <NavLink to="/login">Login</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/users" component={UserList} />
          <Route path="/login" component={Login} />
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
