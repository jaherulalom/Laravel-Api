import React from 'react';
import {browserHistory} from 'react-router';
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
import moment from 'moment'

class SetAvailability extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      appointmentDate: null,
      appointmentTime: ''
    };
  }

  handleChange1(v, date){
    const finaldate = date.getDate() + '-' +  (date.getMonth() + 1)  + '-' +  date.getFullYear()
    this.setState({
       appointmentDate: finaldate,
    });
}
  handleChange2(e, time){
    const finaltime = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    this.setState({
      appointmentTime: finaltime
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const Availability = {
      id: window.id,
      date: this.state.appointmentDate,
      time: this.state.appointmentTime,
      available: '1'
    }
    let uri = 'http://127.0.0.1:8000/availability';
    console.log(Availability);
    axios.post(uri, Availability).then((response) => {
      browserHistory.push('/availability-home');
    })
  }

  render() {
    return (
      <div>
      <div className="row">
        <div className="col-md-6">
          <Card>
          <form>
            <p>hello { id }</p>
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
                   formatDate={(date) => moment(date).format('DD-MM-YYYY')}
                   onChange={this.handleChange1.bind(this)}
                   />
              </div>
              <div>
                <p>Select Time</p>
                <TimePicker
                  hintText="Select Hour and Minute"
                  minutesStep={10}
                  onChange={this.handleChange2.bind(this)}
                />
              </div>
            </CardText>
            <CardActions>
              <RaisedButton
                label="Add"
                primary={true}
                onClick={this.handleSubmit.bind(this)}
                />
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
