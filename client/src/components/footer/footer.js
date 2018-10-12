import React, { Component } from "react";
import { Container, Footer } from "mdbreact";

export default class FooterPage extends Component {
render() {
return (
<Footer color="blue">
  <div className="footer-copyright text-center py-3">
    <Container>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
    </Container>
  </div>
</Footer>
);
}
}
