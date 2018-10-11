import React, {Component} from "react";
import {
    Col,
    Row,
    FormGroup,
    Label,
    Input, 
    Button
  } from "reactstrap";

  export default class ConfigForm extends Component {
    render() {
      return (
        <div>
          <strong>Configuration</strong>
          <hr />
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="site">Site</Label>
                <Input
                  type="text"
                  name="site"
                  id="Site"
                  placeholder="Site Name"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="auth">Auth</Label>
                <Input
                  type="text"
                  name="auth"
                  id="Auth"
                  placeholder="Authorization"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="mid">MID</Label>
                <Input
                  type="test"
                  name="mid"
                  id="Mid"
                  placeholder="Merchant"
                />
              </FormGroup>
            </Col>
            <Button color="grey">Cancel</Button>
            <Button color="blue">Save</Button>
          </Row>
        </div>
      );
    }
  }