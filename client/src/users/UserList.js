import React from 'react';
import axios from 'axios';



class UserList extends React.Component {
  state = {
    users: [],
  };

  render() {
    return (
      <>

        <h2>Our Users</h2>

        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint ='http://localhost:4000/api/users';

    axios
      .get(endpoint, {
        headers: { Authorization: localStorage.getItem('jwt') }
      })
      .then(res => {
        console.log('users', res.data);
        this.setState(() => ({ users: res.data }));
      })
      .catch(({ response }) => {
        console.error('users error', response);
      })
  }
}

export default UserList;