import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class CreateItem extends Component {
  constructor(props){
    super(props);
    this.state = {serviceName: '', serviceDescription: '', serviceDuration: '', serviceCost: ''};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
      return (
      <div>
        <h1>Create An Service</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Item Name:</label>
                <input type="text" className="form-control" onChange={this.handleChange1}/>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Item description:</label>
                  <input type="text" className="form-control" onChange={this.handleChange2}/>
                </div>
              </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Item duration:</label>
                    <input type="text" className="form-control" onChange={this.handleChange3}/>
                  </div>
                </div>
                </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Item Price:</label>
                  <input type="text" className="form-control col-md-6" onChange={this.handleChange4}/>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Item</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateItem;
