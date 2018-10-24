import React, { Component } from "react";
import {
  Col,
  Row,
  Table,
  FormGroup,
  Label,
  Input,
  CustomInput, 
  Button
} from "reactstrap";

export default class BillForm extends Component {
  render() {
    return (
      <div className="container-fluid">
        <br />
        <br />
        <h5><strong>Bill Pay Information</strong></h5>
        <hr />
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="frequency">Pay Frequency:</Label>
              <div>
                <CustomInput
                  type="radio"
                  id="daily"
                  name="customRadio"
                  label="Daily"
                />
                <CustomInput
                  type="radio"
                  id="monthly"
                  name="customRadio"
                  label="Monthly"
                />
                <CustomInput
                  type="radio"
                  id="annually"
                  name="customRadio"
                  label="Annually"
                />
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="firstName">Pay</Label>
              <Input
                type="name"
                name="first"
                id="firstName"
                placeholder="$50.00"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="lastName">Every</Label>
              <Input
                type="name"
                name="last"
                id="lastName"
                placeholder="Months"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="lastName">Until</Label>
              <Input
                type="name"
                name="last"
                id="lastName"
                placeholder="Total = $500"
              />
            </FormGroup>
          </Col>
          <Button color="indigo">Submit</Button>
        </Row>
        <br />
        <h5><strong>Current Bill Plans</strong></h5>
        <hr />
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Bill Plan</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Bill Clinton</td>
              <td>Monthly</td>
              <td>October 11, 2018</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Bill Russell</td>
              <td>Weekly</td>
              <td>October 1, 2018</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Bill Burr</td>
              <td>Annually</td>
              <td>October 5, 2018</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
