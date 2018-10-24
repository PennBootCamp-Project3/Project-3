import React, { Component } from "react";
import {
  Mask,
  Row,
  Col,
  Fa,
  Button,
  View,
  Container,
  Card,
  CardBody,
  Input
} from "mdbreact";
import "./landingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div id="formPage">
        <View>
          <Mask className="justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center col-md-12">
                  <br />
                  <br />
                  <h1 className="h1-responsive font-weight-bold">ReactPay </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    ReactPay is an integration tool used by merchants to
                    seamlessly streamline their payment processing systems.
                  </h6>
                </div>
              </Row>
              <Row>
                <Col md={6}>
                  <Card id="classic-card">
                    <CardBody className="z-depth-2 white-text">
                      <h3 className="text-center">
                        <Fa icon="user" /> Sign Up:
                      </h3>
                      <hr className="hr-light" />
                      <Input
                        label="Your name"
                        icon="user"
                        className="z-depth-2 white-text"
                      />
                      <Input
                        label="Your email"
                        icon="envelope"
                        className="z-depth-2 white-text"
                      />
                      <Input
                        label="Your password"
                        icon="lock"
                        type="password"
                        className="z-depth-2 white-text"
                      />
                      <div className="text-center mt-4 black-text">
                        <Button href="/home/" color="indigo">
                          Sign Up
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                  <br />
                </Col>
                <Col md={6}>
                  <Card id="classic-card">
                    <CardBody className="z-depth-2 white-text">
                      <h3 className="text-center">
                        <Fa icon="user" /> Sign in:
                      </h3>
                      <hr className="hr-light" />
                      <Input
                        label="Your name"
                        icon="user"
                        className="z-depth-2 white-text"
                      />
                      <Input
                        label="Your email"
                        icon="envelope"
                        className="z-depth-2 white-text"
                      />
                      <Input
                        label="Your password"
                        icon="lock"
                        type="password"
                        className="z-depth-2 white-text"
                      />
                      <div className="text-center mt-4 white-text">
                        <Button href="/home/" color="indigo">
                          Sign In
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>
      </div>
    );
  }
}
