import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayForm from "../../components/payForm";
import Panel from "../../components/card";
import CardText from "../../components/cardtext"
import FooterPage from "../../components/footer";
import API from "../../utils/API";
// import { ReactstrapInput } from "reactstrap-formik";

// map the console logged data into a card 

// separate into formData and responseData, this.state.response

// setState {{responseData: api REsponse}}

class Pay extends Component {
constructor(props) {
    super(props);
    this.state = {
         
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
          console.log(result.data);
          console.log(this.state)
          // this.setState({
          //   state = result.data
          // })
          // console.log(props);
          // this.setState({update: result.data});
      })
      .catch(error => {
          console.log(error);
          throw error;
    })
  };

  // updateCard = event => {
  //   event.preventDefault();
  //   // console.log(respData);
  //   console.log(this.props.children.props)
  // }

  render() {
    return (
      <>
        <Heading />
        <br />
        <div class="container">
          <PayForm 
            formData={this.state}
            onSubmit={this.handleFormSubmit} 
            onChange={this.handleChange}
          />
          
        </div>
        <div>
          <Panel>
            <CardText 
            cardText={JSON.stringify(this.state)}
              />
          </Panel>
        </div>
    
        <div>
          <FooterPage />
        </div>
      </>
    );
  }
}

export default Pay;
