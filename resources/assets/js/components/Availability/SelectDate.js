import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment'

class SelectDate extends React.Component {
  constructor (props) {
        super(props);
    }


  onDateChange(dateValue) {
        // for a date field, the value is passed into the change handler
        this.props.onChange('dateCommenced', dateValue);
    }

  render() {
    return (
      <DatePicker
        hintText="Select the date"
        formatDate={(date) => moment(date).format('DD-MM-YYYY')}
        onChange={this.onDateChange.bind(this)} />
    );
  }

}

export default SelectDate;
