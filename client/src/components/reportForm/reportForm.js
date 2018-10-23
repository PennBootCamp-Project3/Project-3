import React, { Component } from "react";
import { Table } from "reactstrap";
import API from "../../utils/API";

class Report extends Component {

renderTable = () => {
  API
}

  render() {
    return (
      <div>
        <br />
        <br />
        <h5><strong>Transactions</strong></h5>
        <hr />
        <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
      </div>
    );
  }
}

export default Report;