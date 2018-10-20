import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
// import API from '../../utils/API';

export default class Panel extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-md-6">
        <Card>
            <CardBody
            content={this.props.respData}
            >
            
            <h5>TEST</h5>
            </CardBody>
        </Card>
      </div>
    );
  }
}