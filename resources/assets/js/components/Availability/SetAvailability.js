import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {
  lightBlue50,
  lightBlue900,
  grey200,
  grey700
} from 'material-ui/styles/colors';

class SetAvailability extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      appointmentDate: '',
      appointmentTime: ''
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(e, v){
    this.setState({
      // appointmentDate: v.target.value
    })
    console.log(e, v);
  }
  handleChange2(e){
    this.setState({
      appointmentTime: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const Availability = {
      appointmentDate: this.state.appointmentDate,
      appointmentTime: this.state.appointmentTime
    }
    let uri = 'http://127.0.0.1:8000/availability';
    console.log(Availability);
    // axios.post(uri, Availability).then((response) => {
    //   browserHistory.push('/availability-home');
    // })
  }


  render() {
    return (
      <div>
      <div className="row">
        <div className="col-md-6">
          <Card>
          <form onSubmit={this.handleSubmit}>
            <CardHeader
              title="SET AVAILABILITY"
              titleColor={grey700}
              style={{backgroundColor: grey200}}
            />
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              <div>
                <p>Select the date</p>
                <DatePicker
                  hintText="Select the date"
                  onChange={this.handleChange1} />
              </div>
              <div>
                <p>Select Time</p>
                <TimePicker
                  hintText="Select Hour and Minute"
                  minutesStep={10}
                  onChange={this.handleChange2}
                />
              </div>
            </CardText>
            <CardActions>
              <RaisedButton
                label="Add"
                primary={true} />
            </CardActions>
            </form>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <CardHeader
              title="VIEW AVAILABILITY"
              titleColor={grey700}
              style={{backgroundColor: grey200}}
            />
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </div>
      </div>
      </div>
    );
  }

}

export default SetAvailability;
