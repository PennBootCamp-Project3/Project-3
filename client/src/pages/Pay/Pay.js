import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayForm from "../../components/payForm";
import FooterPage from "../../components/footer";
import API from "../../utils/API";
import { ReactstrapInput } from "reactstrap-formik";


class Pay extends Component {
    
  //API request object could be stored in state
  state = { 
      firstName: '',
      lastName: '',
      cardNum: '',
      year: ''
    };

  handleInputChange = event => {
    const { firstName, lastName, cardNum, year } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.cardNum && this.state.expiry) { //form validation
      API.runAuth({               //calling runAuth endpoint which will send to server
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        cardNum: this.state.cardNum,
        expiry: this.state.expiry,
        amount: this.state.amount   // need to create a field for amount
      })
        .then(res => this.recordAuth())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container">
          <PayForm />
        </div>
        <div>
          <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Pay;
