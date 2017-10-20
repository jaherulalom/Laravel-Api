import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import EventAvailable from 'material-ui/svg-icons/action/event';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';

class Availability extends React.Component {

  render() {
    return (
      <div>Manage all things related to your Availability here
      <br />
      <Link to="/set-availability"><RaisedButton
      label="Set Availability"
      labelPosition="before"
      primary={true}
      icon={<EventAvailable />}
      style={styles.button}
    /></Link>
    </div>
    );
  }

}

const styles = {
  button: {
    margin: 12,
  }
}

export default Availability;
