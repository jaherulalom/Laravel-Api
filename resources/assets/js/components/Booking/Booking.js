import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import {
  lightBlue50,
  lightBlue900,
  grey200,
  grey700
} from 'material-ui/styles/colors'

const Booking = () => (
  <Card>
    <CardHeader
      title="Manage Bookings"
      titleColor={grey700}
      style={{backgroundColor: grey200}}
    />

    <CardActions>
      <Link to="/add-booking"><FlatButton label="Create New Booking" /></Link>
      <Link to="/view-booking"><FlatButton label="View Bookings" /></Link>
    </CardActions>
  </Card>
);

export default Booking;
