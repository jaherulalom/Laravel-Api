
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
import CreateService from './components/Services/CreateService';
import DisplayItem from './components/Services/DisplayServices';
import index from './components/Services/index';

render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
      <Route path="/services-home" component={index} />
      <Route path="/add-item" component={CreateService} />
      <Route path="/display-item" component={DisplayItem} />
      </Route>
    </Router>,
        document.getElementById('example'));
