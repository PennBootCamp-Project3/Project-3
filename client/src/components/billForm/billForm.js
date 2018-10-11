import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";

export default class BillForm extends Component {
    render() {
      return (
        <div>
          <strong>Bill Pay Information</strong>
          <hr />
          <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="frequency">Frequency:</Label>
                  <div>
                    <CustomInput type="radio" id="daily" name="customRadio" label="Daily" />
                    <CustomInput type="radio" id="monthly" name="customRadio" label="Monthly" />
                    <CustomInput type="radio" id="annually" name="customRadio" label="Annually" />
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <div>
                    <CustomInput type="radio" id="saveProfile" name="customRadio" label="Save Profile" />
                  </div>
                </FormGroup>
              </Col>
            </Row>
        </div>
      );
    }
  }