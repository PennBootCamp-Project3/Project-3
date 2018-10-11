import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import ConfigForm from "../../components/configForm";

class Config extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container-fluid">
          <ConfigForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Config;