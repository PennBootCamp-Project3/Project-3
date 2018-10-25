import React, { Component } from "react";
import { Table } from "reactstrap";
import ReactTable from "react-table";
import API from "../../utils/API";

class ReportForm extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h5>
          <strong>Reports</strong>
        </h5>
        <hr />
        <ReactTable 
          data={this.props.resp} 
          columns={this.props.cols} 
          defaultSorted={[
            {desc: true}
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
        />
      </div>
    );
  }
}

export default ReportForm;
