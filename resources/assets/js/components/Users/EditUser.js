import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class EditUser extends React.Component {
  constructor(props) {
      super(props);
      this.state = {first_name: '', last_name: '', number: '', email: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`http://127.0.0.1:8000/users/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        number: response.data.number,
        email: response.data.email });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange1(e){
    this.setState({
      first_name: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      last_name: e.target.value
    })
  }
  handleChange3(e){
    this.setState({
      number: e.target.value
    })
  }
  handleChange4(e){
    this.setState({
      email: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const services = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      number: this.state.number,
      email: this.state.email
    }
    let uri = 'http://127.0.0.1:8000/users/'+this.props.params.id;
    axios.patch(uri, services).then((response) => {
          this.props.history.push('/display-users');
    });
  }

  render() {
    return (
      <div>
        <h1>Update User</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-users" className="btn btn-success">Return to Users</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.first_name}
                  onChange={this.handleChange1} />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.last_name}
                  onChange={this.handleChange2} />
            </div>
            <div className="form-group">
                <label>Number</label>
                <input type="text"
                  className="form-control"
                  value={this.state.number}
                  onChange={this.handleChange3} />
            </div>
            <div className="form-group">
                <label name="product_cost">Email</label>
                <input type="text" className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange4} />
            </div>

            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}

export default EditUser;
