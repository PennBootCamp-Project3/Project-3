import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
// import API from '../../utils/API';


// TO DO: add form validation on required fields and option selections

export default class PayForm extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-md-6">
        <container className="col-md-6">
          <br />
          <br />
          <h5><strong>Results</strong></h5>
      </container> 
        <br />
        <br />
        <h5><strong>Shipping Information</strong></h5>
        <hr />
        <Form >
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input 
                  type="name" 
                  name="firstName" 
                  id="firstName" 
                  value={this.props.formData.firstName}
                  onChange={this.props.onChange}
                  placeholder="Lou" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input 
                  type="name" 
                  name="lastName" 
                  id="lastName" 
                  value={this.props.formData.lastName}
                  onChange={this.props.onChange}
<<<<<<< HEAD
                  placeholder="Reed" />
=======
                  placeholder="" />
>>>>>>> f91a5fb041dda011a29777768496f92ca13eefec
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="billingAddress">Billing Address</Label>
            <Input 
              type="text" 
<<<<<<< HEAD
              name="street" 
              id="street"
              value={this.props.formData.street} 
              onChange={this.props.onChange}
              placeholder="" 
            />
=======
              name="billing" id="billing" 
              placeholder="" />
>>>>>>> f91a5fb041dda011a29777768496f92ca13eefec
          </FormGroup>
          <FormGroup>
            <Label for="billingAddress2">Apt/Suite</Label>
            <Input
              type="text"
<<<<<<< HEAD
              name="apt"
              value={this.props.formData.apt} 
              onChange={this.props.onChange}
              id="apt"
=======
              name="billingTwo"
              id="billingTwo"
>>>>>>> f91a5fb041dda011a29777768496f92ca13eefec
              placeholder=""
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input 
                  type="text" 
                  name="city" 
<<<<<<< HEAD
                  value={this.props.formData.city} 
                  onChange={this.props.onChange}
=======
>>>>>>> f91a5fb041dda011a29777768496f92ca13eefec
                  id="city" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state">State</Label>
                <Input 
                  type="select" 
<<<<<<< HEAD
                  name="state" 
                  value={this.props.formData.state} 
                  onChange={this.props.onChange}
=======
                  name="selectState" 
>>>>>>> f91a5fb041dda011a29777768496f92ca13eefec
                  id="selectState">
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
            <Col md={2}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input 
                  type="text" 
<<<<<<< HEAD
                  name="postal" 
                  value={this.props.formData.postal} 
                  onChange={this.props.onChange}
                  id="postal" />
=======
                  name="zip" 
                  id="zip" />
>>>>>>> f91a5fb041dda011a29777768496f92ca13eefec
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <br/>
        <h5><strong>Billing Information</strong></h5>
        <hr />
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="cardType">Card Type</Label>
                <Input 
                  type="select" 
                  name="cardType" 
                  id="cardType">
                  <option value="Visa">Visa</option>
                  <option value="Mastercard">Mastercard</option>
                  <option values="American Express">American Express</option>
                  <option values="Discover">Discover</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="account">Card Number</Label>
                <Input
                  type="text"
<<<<<<< HEAD
                  name="account"
                  id="account"
                  value={this.props.formData.account} 
                  onChange={this.props.onChange}
                  placeholder="4444 3333 2222 1111"
=======
                  name="cardNum"
                  id="cardNum"
                  value={this.props.formData.cardNum}
                  onChange={this.props.onChange}
                  placeholder="0000-0000-0000-0000"
>>>>>>> f91a5fb041dda011a29777768496f92ca13eefec
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="CVV">CVC</Label>
                <Input
                  type="text"
                  name="cvv"
<<<<<<< HEAD
                  value={this.props.formData.cvv} 
                  onChange={this.props.onChange}
=======
>>>>>>> f91a5fb041dda011a29777768496f92ca13eefec
                  id="cvv"
                  placeholder="123"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="month">Expiration Month</Label>
                <Input 
                  type="select" 
<<<<<<< HEAD
                  name="month"
                  value={this.props.formData.month} 
                  onChange={this.props.onChange} 
=======
                  name="selectMonth" 
>>>>>>> f91a5fb041dda011a29777768496f92ca13eefec
                  id="selectMonth">
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
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="year">Year</Label>
                <Input
                  type="text"
                  name="year"
<<<<<<< HEAD
                  id="exampleYear"
                  value={this.props.formData.year} 
                  onChange={this.props.onChange}
                  placeholder="2020"
=======
                  id="year"
                  value={this.props.formData.year}
                  onChange={this.props.onChange}
                  placeholder="2018"
>>>>>>> f91a5fb041dda011a29777768496f92ca13eefec
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
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
        </Form>
        <br/>
        <h5><strong>Profile</strong></h5>
        <hr />
        <Form>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="cardType">Send Receipt To:</Label>
                <Input 
                  type="select" 
                  name="receipt" 
                  id="receipt">
                  <option value="Saved">Saved Contacts</option>
                  <option value="Taub">Dean Taub</option>
                </Input>
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
          <Button 
          onClick={this.props.onSubmit}
            color="indigo"
            type="submit"
            // value="Submit"
            >Submit Order</Button>
        </Form>
      </div> 
    );
  }
}
