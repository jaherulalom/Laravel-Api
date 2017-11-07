import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Router, Route, Link } from 'react-router';

class LeftDrawer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {open: false};
      this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
      this.setState({open: !this.state.open});
  }

  handleClose() {
     this.props.handleClose();
  }

  render() {
    return (
      <div>
        <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={(open) => this.setState({open})}>
              <Link to="/"><MenuItem onTouchTap={this.handleClose}>Home</MenuItem></Link>
              <Link to="services-home"><MenuItem onTouchTap={this.handleClose}>Services</MenuItem></Link>
              <Link to="availability-home"><MenuItem onTouchTap={this.handleClose}>Availability</MenuItem></Link>
              <Link to="users-home"><MenuItem onTouchTap={this.handleClose}>User Management</MenuItem></Link>
              <Link to="booking-home"><MenuItem onTouchTap={this.handleClose}>Manage Bookings</MenuItem></Link>
        </Drawer>
      </div>
    );
  }

}

export default LeftDrawer;
