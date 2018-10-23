import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import ReportForm from "../../components/reportForm";
import FooterTwo from "../../components/footerTwo";

class Report extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  
  getReport = event => {

  }
  
  
  render() {
    const report = this.props.report;
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container">
          <ReportForm />
        </div>
        <div>
          <FooterTwo />
        </div>
      </React.Fragment>
    );
  }
}

export default Report;
