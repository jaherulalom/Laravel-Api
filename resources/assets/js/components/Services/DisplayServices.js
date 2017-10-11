import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';

class DisplayServices extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', services: ''};
     }
     componentDidMount(){
       axios.get('http://127.0.0.1:8000/services')
       .then(response => {
         this.setState({ services: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.services instanceof Array){
         return this.state.services.map(function(object, i){
             return <TableRow obj={object} key={i} />;
         })
       }
     }

  render(){
    return (
      <div>
        <h1>Services</h1>

        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Create Item</Link>
          </div>
        </div><br />

        <table className="table table-hover">
            <thead>
            <tr>
                <td>Service Name</td>
                <td>Service Description</td>
                <td>Service Duration</td>
                <td>Service Cost</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayServices;
