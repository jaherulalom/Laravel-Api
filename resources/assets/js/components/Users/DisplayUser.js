import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import UserTableRow from './UserTableRow';

class DisplayUser extends React.Component {
  constructor(props) {
       super(props);
       this.state = {value: '', users: ''};
     }
     componentDidMount(){
       axios.get('http://127.0.0.1:8000/users')
       .then(response => {
         this.setState({ users: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.users instanceof Array){
         return this.state.users.map(function(object, i){
             return <UserTableRow obj={object} key={i} />;
         })
       }
     }

  render() {
    return (
      <div>
      <h1>Users</h1>

      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <Link to="/add-users">Create a new user</Link>
        </div>
      </div><br />

      <table className="table table-hover">
          <thead>
          <tr>
              <td>User ID</td>
              <td>User First Name</td>
              <td>User Last Name</td>
              <td>User Number</td>
              <td>User Email</td>
              <td>Actions</td>
          </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
      </table>
      </div>
    );
  }

}

export default DisplayUser;
