// Master.js

import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

import Home from './Home/Home';

class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Appointments System</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><Link to="services-home">Services</Link></li>
              <li><a href="#">Availability</a></li>
              <li><a href="#">Appointments</a></li>
              <li><Link to="users-home">User Management</Link></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;
