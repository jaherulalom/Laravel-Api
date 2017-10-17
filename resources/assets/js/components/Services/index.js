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

const index = () => (
  <Card>
    <CardHeader
      title="Manage Services"
      titleColor={grey700}
      style={{backgroundColor: grey200}}
    />

    <CardActions>
      <Link to="/add-item"><FlatButton label="Create Services" /></Link>
      <Link to="/display-item"><FlatButton label="View Services" /></Link>
    </CardActions>
  </Card>
);

export default index;
