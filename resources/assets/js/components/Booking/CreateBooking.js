import React from 'react';
import {browserHistory} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import {
  lightBlue50,
  lightBlue900,
  grey200,
  grey700
} from 'material-ui/styles/colors';

class CreateBooking extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dialogBox: false,
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  listItem(){
  }
  componentDidMount() {
    console.log(this);
  }

  handleOpen(){
    this.setState({
      dialogBox: true
    })
  }
  handleClose(){
    this.setState({
      dialogBox: false
    })
  }


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}

      />,
    ];
    return (
      <Card>
      <form onSubmit={this.handleOpen}>
        <CardHeader
          title="Create a Booking"
          titleColor={grey700}
          style={{backgroundColor: grey200}}
        />
        <CardText>
        <TextField
          hintText="User Name"
          floatingLabelText="User Name"
          onChange={this.handleChange1}
        /><br />
        <SelectField
           value={this.state.value}
           onChange={this.handleChange}
           maxHeight={200}
         >
           {this.listItem()}
         </SelectField>
        </CardText>
        <CardActions>
          <RaisedButton label="Confirm" primary={true} onClick={this.handleOpen}/>
          <Dialog
          title="Alert"
          actions={actions}
          modal={false}
          open={this.state.dialogBox}
          onRequestClose={this.handleClose}
        >
          Confirm that you want to make this booking.
        </Dialog>
        </CardActions>
        </form>
      </Card>
    );
  }

}

export default CreateBooking;
