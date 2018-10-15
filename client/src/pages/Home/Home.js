import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import HomeForm from "../../components/homeForm";
import FooterPage from "../../components/footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container">
          <HomeForm />
        </div>
        <div>
          <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
