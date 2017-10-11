import React from 'react';
import {browserHistory} from 'react-router';

class CreateUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {first_name: '', last_name: '', number: '', email: '', password: ''};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleChange5(e){
    this.setState({
      password: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const services = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      number: this.state.number,
      email: this.state.email,
      password: this.state.password
    }
    let uri = 'http://127.0.0.1:8000/users';
    console.log(services);
    axios.post(uri, services).then((response) => {
      browserHistory.push('/display-users');
    });
  }

  render() {
    return (
      <div>
        <h1>Create A User</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>First Name:</label>
                <input type="text" className="form-control" onChange={this.handleChange1}/>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" className="form-control" onChange={this.handleChange2}/>
                </div>
              </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Number:</label>
                    <input type="text" className="form-control" onChange={this.handleChange3}/>
                  </div>
                </div>
                </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email:</label>
                  <input type="text" className="form-control col-md-6" onChange={this.handleChange4}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Password:</label>
                  <input type="text" className="form-control col-md-6" onChange={this.handleChange5}/>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add User</button>
            </div>
        </form>
  </div>
    );
  }

}

export default CreateUser;
