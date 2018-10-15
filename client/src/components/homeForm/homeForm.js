import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Col, Row } from "reactstrap";
import "./homeForm.css";

export default class HomeForm extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div
          class="card card-image"
          style={{
            backgroundImage: "url(" + "https://www.lvvwd.com/assets/images/about-us-pay-bill-16x7.jpg" + ")"
          }}
        >
          <div class="text-white text-center rgba-stylish-strong py-5 px-4">
            <div class="py-5">
              <h2 class="card-title h2 my-4 py-2">
                Welcome to ReactPay!
              </h2>
              <p class="mb-4 pb-2 px-md-5 mx-md-5">
                ReactPay is an integration tool used by merchants 
                to seamlessly streamline their payment processing 
                systems.
              </p>
            </div>
          </div>
        </div>

        <div>
          <br />
          <Row>
            <Col md={6}>
              <Card body inverse color="primary">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button href ="/pay/" color="indigo">Go to Pay Form</Button>
              </Card>
            </Col>
            <Col md={6}>
              <Card body inverse color="primary">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button href="/bill/" color="indigo">Go to Bill Form</Button>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={6}>
              <Card body inverse color="info">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button href="/report/" color="indigo">Go to Report Form</Button>
              </Card>
            </Col>
            <Col md={6}>
              <Card body inverse color="info">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button href="/bolt/" color="indigo">Go to Bolt Form</Button>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={6}>
              <Card body inverse color="primary">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button href="/config/" color="indigo">Go to Config Form</Button>
              </Card>
            </Col>
            <Col md={6}>
              <Card body inverse color="primary">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button href="/" color="indigo">Logout</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
