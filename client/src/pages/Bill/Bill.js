import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import BillForm from "../../components/billForm";

class Bill extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container-fluid">
          <BillForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Bill;
