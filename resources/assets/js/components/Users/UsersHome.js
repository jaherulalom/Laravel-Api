import React from 'react';
import { Link } from 'react-router';


class UsersHome extends React.Component {

  render() {
    return (
      <div>Welcome to user Management
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <Link to="/add-users">Create Users</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <Link to="/display-users">View Users</Link>
        </div>
      </div>
      </div>
    );
  }

}

export default UsersHome;
