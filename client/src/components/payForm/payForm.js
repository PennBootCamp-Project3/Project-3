import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class PayForm extends Component {
  render() {
    return (
      <div>
        <strong>Shipping Information</strong>
        <hr />
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">First Name</Label>
                <Input type="name" name="first" id="firstName" placeholder="" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Last Name</Label>
                <Input type="name" name="last" id="lastName" placeholder="" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Billing Address</Label>
            <Input type="text" name="address" id="billing" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input
              type="text"
              name="addressTwo"
              id="billingTwo"
              placeholder=""
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Row>
          <Button>Submit Order</Button>
        </Form>
      </div>
    );
  }
}
