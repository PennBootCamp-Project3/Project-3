import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import BillForm from "../../components/billForm";
import FooterPage from "../../components/footer";

class Bill extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container">
          <BillForm />
        </div>
        <div>
        <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Bill;
