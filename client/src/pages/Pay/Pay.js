import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayForm from "../../components/payForm";
import FooterPage from "../../components/footer";
import API from "../../utils/API";
// import { ReactstrapInput } from "reactstrap-formik";

// map the console logged data into a card 

// separate into formData and responseData, this.state.response

// setState {{responseData: api REsponse}}

class Pay extends Component {
constructor() {
    super();
    this.state = {
    
    formData: {
        firstName: '',
        lastName: '',
        cardNum: '',
        month: '',
        year: '',
        street: '',
        apt: '',
        city: '',
        state: '', 
        postal: '',
        cardNum: '',
        cvv: '',
        year: '',
        amount: ''
    },

    respData: {}
    
}}

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
      API.runAuth(this.state)
      .then(result => {
          console.log({respData: result.data});
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

        </div>
        <div>
          <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Pay;
