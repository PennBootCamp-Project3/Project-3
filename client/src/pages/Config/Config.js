import React, { Component, Fragment } from "react";
import Heading from "../../components/Nav/Nav";
import ConfigForm from "../../components/configForm";
import FooterPage from "../../components/footer";

class Config extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container">
          <ConfigForm />
        </div>
        <div>
          <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Config;
