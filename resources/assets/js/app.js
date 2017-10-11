
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Master from './components/Master';

//Services imports
import CreateService from './components/Services/CreateService';
import DisplayItem from './components/Services/DisplayServices';
import index from './components/Services/index';
import EditService from './components/Services/EditService';

//User Management imports
import UsersHome from './components/Users/UsersHome';
import CreateUser from './components/Users/CreateUser';
import DisplayUser from './components/Users/DisplayUser';
import EditUser from './components/Users/EditUser';

render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
      //service routes here
      <Route path="/services-home" component={index} />
      <Route path="/add-item" component={CreateService} />
      <Route path="/edit/:id" component={EditService} />
      <Route path="/display-item" component={DisplayItem} />
      // user management routes here
      <Route path="/users-home" component={UsersHome} />
      <Route path="/add-users" component={CreateUser} />
      <Route path="/users/:id/edit" component={EditUser} />
      <Route path="/display-users" component={DisplayUser} />
      </Route>
    </Router>,
        document.getElementById('example'));
