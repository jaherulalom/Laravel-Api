// Master.js

import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from './LeftDrawer';

class Master extends Component {
  constructor(props) {
  super(props);
  this.state = {open: false};
}

handleTouchMap() {
    this.setState({open: !this.state.open});
  }

  render(){
    return (
      <div>
      <AppBar
          title = { "Test 1" }
          onLeftIconButtonTouchTap = { this.handleTouchMap.bind(this) }
        />
        <LeftDrawer open={this.state.open} />
      </div>
    )
  }
}
export default Master;
