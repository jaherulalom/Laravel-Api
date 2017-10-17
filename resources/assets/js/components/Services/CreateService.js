import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { Link } from 'react-router';
import {
  lightBlue50,
  lightBlue900,
  grey200,
  grey700
} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

class CreateItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      serviceName: '',
      serviceDescription: '',
      serviceDuration: '',
      serviceCost: '',
      dialogBox: false,
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleChange1(e){
    this.setState({
      serviceName: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      serviceDescription: e.target.value
    })
  }
  handleChange3(e){
    this.setState({
      serviceDuration: e.target.value
    })
  }
  handleChange4(e){
    this.setState({
      serviceCost: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const services = {
      name: this.state.serviceName,
      description: this.state.serviceDescription,
      duration: this.state.serviceDuration,
      cost: this.state.serviceCost
    }
    let uri = 'http://127.0.0.1:8000/services';
    console.log(services);
    axios.post(uri, services).then((response) => {
      browserHistory.push('/display-item');
    });
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
          onClick={this.handleSubmit}
        />,
      ];
      return (
      <div>
      <Card>
      <form onSubmit={this.handleOpen}>
        <CardHeader
          title="Create a Service"
          titleColor={grey700}
          style={{backgroundColor: grey200}}
        />
        <CardText>
        <TextField
          hintText="Service Name"
          floatingLabelText="Service Name"
          onChange={this.handleChange1}
        /><br />
        <TextField
          hintText="Describe the service type"
          floatingLabelText="Service Name"
          onChange={this.handleChange2}
        /><br />
        <TextField
          hintText="Duration in minutes"
          floatingLabelText="Service Duration"
          onChange={this.handleChange3}
        /><br />
        <TextField
          hintText="Service Cost"
          floatingLabelText="Enter Cost in decimal"
          onChange={this.handleChange4}
        /><br />
        </CardText>
        <CardActions>
          <RaisedButton label="Add Item" primary={true} onClick={this.handleOpen}/>
          <Dialog
          title="Alert"
          actions={actions}
          modal={false}
          open={this.state.dialogBox}
          onRequestClose={this.handleClose}
        >
          Confirm that you want to add this service.
        </Dialog>
        </CardActions>
        </form>
      </Card>
  </div>
      )
    }
}
export default CreateItem;
