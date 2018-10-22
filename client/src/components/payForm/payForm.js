import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import CardText from "../../components/cardtext";
// import API from "../../utils/API";

export default class PayForm extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <br />
        <br />
        <h5>
          <strong>Shipping Information</strong>
        </h5>
        <hr />
        <Form className>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Full Name</Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  value={this.props.formData.name}
                  onChange={this.props.onChange}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <Card style={{ marginLeft: "30px" }}>
                <CardBody>
                  <CardTitle>Submit Order Results</CardTitle>
                  <CardText cardText={JSON.stringify(this.state)} />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="billingAddress">Billing Address</Label>
                <Input
                  type="text"
                  name="street"
                  id="street"
                  value={this.props.formData.street}
                  onChange={this.props.onChange}
                  placeholder=""
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="billingAddress2">Address 2</Label>
                <Input
                  type="text"
                  name="apt"
                  id="apt"
                  value={this.props.formData.apt}
                  onChange={this.props.onChange}
                  placeholder=""
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  value={this.props.formData.city}
                  onChange={this.props.onChange}
                  id="city"
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="state">State</Label>
                <Input
                  type="select"
                  name="selectState"
                  id="selectState"
                  value={this.props.formData.selectState}
                  onChange={this.props.onChange}
                >
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={1}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input
                  type="text"
                  name="postal"
                  value={this.props.formData.postal}
                  onChange={this.props.onChange}
                  id="postal"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <br />
        <h5>
          <strong>Billing Information</strong>
        </h5>
        <hr />
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="cardType">Card Type</Label>
                <Input
                  type="select"
                  name="cardType"
                  value={this.props.formData.cardType}
                  onChange={this.props.onChange}
                  id="cardType"
                >
                  <option value="Visa">Visa</option>
                  <option value="Mastercard">Mastercard</option>
                  <option values="American Express">American Express</option>
                  <option values="Discover">Discover</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="cardNumber">Card Number</Label>
                <Input
                  type="text"
                  name="account"
                  id="account"
                  value={this.props.formData.account}
                  onChange={this.props.onChange}
                  placeholder="0000-0000-0000-0000"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="expiry">Expiration Date</Label>
                <Input
                  type="text"
                  name="expiry"
                  id="expiry"
                  value={this.props.formData.expiry}
                  onChange={this.props.onChange}
                  placeholder="MMYY"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="CVV">CVC</Label>
                <Input
                  type="text"
                  name="cvv"
                  id="cvv"
                  value={this.props.formData.cvv}
                  onChange={this.props.onChange}
                  placeholder="000"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="amount">Amount</Label>
                <Input
                  type="text"
                  name="amount"
                  id="amount"
                  value={this.props.formData.amount}
                  onChange={this.props.onChange}
                  placeholder="$50.00"
                />
              </FormGroup>
            </Col>
          </Row>
          {/* <Col md={4}>
              <FormGroup>
                <Label for="month">Expiration Month</Label>
                <Input 
                  type="select" 
                  name="selectMonth" 
                  id="selectMonth"
                  value={this.props.formData.month}
                  onChange={this.props.onChange}>
                  <option value="Jan">January</option>
                  <option value="Feb">February</option>
                  <option value="Mar">March</option>
                  <option value="Apr">April</option>
                  <option value="May">May</option>
                  <option value="Jun">June</option>
                  <option value="Jul">July</option>
                  <option value="Aug">August</option>
                  <option value="Sep">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </Input>
              </FormGroup>
            </Col> */}
        </Form>
        <br />
        <h5>
          <strong>Profile</strong>
        </h5>
        <hr />
        <Form>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="cardType">Send Receipt To:</Label>
                <Input
                  type="select"
                  name="receipt"
                  value={this.props.formData.profile}
                  onChange={this.props.onChange}
                  id="receipt"
                >
                  <option value="Saved">Saved Contacts</option>
                  <option value="Taub">Dean Taub</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <div>
                  <CustomInput
                    type="radio"
                    id="saveProfile"
                    name="customRadio"
                    label="Save Profile"
                  />
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Button
            onClick={this.props.onSubmit}
            color="indigo"
            type="submit"
            // value="Submit"
          >
            Submit Order
          </Button>
        </Form>
      </div>
    );
  }
}
