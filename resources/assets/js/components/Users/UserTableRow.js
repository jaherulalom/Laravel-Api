import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class UserTableRow extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(event) {
  event.preventDefault();
  let uri = `http://127.0.0.1:8000/users/${this.props.obj.id}`;
  axios.delete(uri);
    browserHistory.push('/display-users');
}
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.first_name}
          </td>
          <td>
            {this.props.obj.last_name}
          </td>
          <td>
            {this.props.obj.number}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
          <Link to={"users/"+this.props.obj.id+"/edit"} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}

export default UserTableRow;
