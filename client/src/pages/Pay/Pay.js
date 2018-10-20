import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayForm from "../../components/payForm";
import FooterPage from "../../components/footer";
import API from "../../utils/API";
// import { ReactstrapInput } from "reactstrap-formik";

// map the console logged data into a card 

class Pay extends Component {
    
  //API request object could be stored in state
  state = { 
      firstName: '',
      lastName: '',
      // name: '',
      cardNum: '',
      month: '',
      year: '',
      // expiry: '',
      street: '',
      apt: '',
      city: '',
      state: '', 
      postal: '',
      cardNum: '',
      cvv: ''
      year: '',
      amount: ''
    };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // console.log("inside handle form")
    // if (this.state.cardNum && this.state.expiry) { //form validation
         // need to create a field for amount
      // })
      API.runAuth(this.state)
      .then(result => {
          console.log(result.data);
      })
      .catch(error => {
          console.log(error);
          throw error;
    })
  };

  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container">
          <PayForm 
          formData={this.state}
          onSubmit={this.handleFormSubmit} 
          onChange={this.handleChange}/>
        </div>
        <div>
          <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Pay;
