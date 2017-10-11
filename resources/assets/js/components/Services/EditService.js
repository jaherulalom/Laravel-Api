import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class EditService extends Component {
  constructor(props) {
      super(props);
      this.state = {name: '', description: '', duration: '', cost: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`http://127.0.0.1:8000/services/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ name: response.data.name, description: response.data.description, duration: response.data.duration, cost: response.data.cost });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange1(e){
    this.setState({
      name: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      description: e.target.value
    })
  }
  handleChange3(e){
    this.setState({
      duration: e.target.value
    })
  }
  handleChange4(e){
    this.setState({
      cost: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const products = {
      name: this.state.name,
      description: this.state.description,
      duration: this.state.duration,
      cost: this.state.cost
    }
    let uri = 'http://localhost:8000/items/'+this.props.params.id;
    axios.patch(uri, products).then((response) => {
          this.props.history.push('/display-item');
    });
  }
  render(){
    return (
      <div>
        <h1>Update Item</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to Items</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Item Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange1} />
            </div>
            <div className="form-group">
                <label>Item Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleChange2} />
            </div>
            <div className="form-group">
                <label>Item Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.duration}
                  onChange={this.handleChange3} />
            </div>
            <div className="form-group">
                <label name="product_price">Item Price</label>
                <input type="text" className="form-control"
                  value={this.state.cost}
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
export default EditService;
