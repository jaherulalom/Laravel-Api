// Master.js

import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from './LeftDrawer';

class Master extends Component {
  constructor(props){
     super(props);

     this.state = {
       open: false
     };
     this.toggleDrawer = this.toggleDrawer.bind(this);
     this.handleClose = this.handleClose.bind(this);
   }

   toggleDrawer(){
     this.setState({
       open: !this.state.open
     });
   }

   handleClose(){
     this.setState({open: false})
   }

  render(){
    return (
      <div>
        <AppBar title='My App' onLeftIconButtonTouchTap={this.toggleDrawer}/>
        <LeftDrawer open={this.state.open} handleClose={this.handleClose} onToggleDrawer={this.toggleDrawer} />
      <div style={{ margin: 30 }}>
          {this.props.children}
      </div>
      </div>
    )
  }
}
export default Master;
