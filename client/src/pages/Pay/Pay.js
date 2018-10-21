import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayForm from "../../components/payForm";
import Panel from "../../components/panel";
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
      // formData: {
      //       firstName: '',
      //       lastName: '',
      //       cardNum: '',
      //       month: '',
      //       year: '',
      //       street: '',
      //       apt: '',
      //       city: '',
      //       state: '', 
      //       postal: '',
      //       cardNum: '',
      //       cvv: '',
      //       year: '',
      //       amount: ''
      //     },
      // respData: {}
    } 
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
      API.runAuth(this.state)
      .then(result => {
          this.state.respData = result.data;
          // console.log(this.state.respData);
          // this.populatePanel(this.state.respData);
          // return this.state.respData;
          
      })
      .catch(error => {
          console.log(error);
          throw error;
    })
  };

  populatePanel = respData => {
    console.log("in populatePanel")
    // console.log(respData);
    // console.log(this.state.respData);
  }

  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container">
          <PayForm 
          formData={this.state}
          onSubmit={this.handleFormSubmit} 
          onChange={this.handleChange}
          />
          {/* <Panel
          panelBody={this.state.respData}
          /> */}
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
