import React from 'react';
import { Link } from 'react-router';

class index extends React.Component {

  render() {
    return (
      <div>this is the services home page
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <Link to="/add-item">Create Item</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <Link to="/display-item">View Items</Link>
        </div>
      </div>
      </div>
    );
  }

}

export default index;
