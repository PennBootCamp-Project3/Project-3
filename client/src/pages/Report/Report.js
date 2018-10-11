import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import ReportForm from "../../components/reportForm";

class Report extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container-fluid">
          <ReportForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Report;
