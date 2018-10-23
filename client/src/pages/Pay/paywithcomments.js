import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayForm from "../../components/payForm";
import Panel from "../../components/card";
import CardText from "../../components/cardtext";
import FooterPage from "../../components/footer";
import API from "../../utils/API";
// import { ReactstrapInput } from "reactstrap-formik";

class Pay extends Component {
constructor(props) {
    super(props);
    console.log(this.props);
    // this.props.formData = this.formData.bind(this);
    this.state = {
      // // formData prop is currently populating 'here'
      // data : [
      //   {request: {}},
      //   {response: {}}
      // ]  
    };
}

  // handleChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   // let reqBody = {[name]: value};
  //   // this.setState(this.state.requestData = reqBody);
  //   // console.log(this.state.requestData);
  //   this.setState({
  //     [name]: value
  //   });
  //   // .then(console.log("here"));
  //     // this.setState(this.state.requestData = req.body);
  // };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // handleResponse = authResp => {
  //   console.log(authResp);
  //   this.setState();
  // }
  // updateCard = authResp => {
  //   this.setState({
  //     cardText: authResp
  //   })
    // console.log(respData);
    // console.log(this.props.children.props)
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    // console.log(this.state.requestData);
      API.runAuth(this.state)
      .then(result => {
          // console.log(result.data);
          // this.setState(result.data)
          this.setState({...this.state, ...result.data});
          // this.authResp = result.data;
          // {this.state, result.data}
          // this.setState(this.cardText = result.data)
          

          // this.state.authResp = result.data;
          // return this.state.authResp
          // this.props.children.authResp = result.data;
          // console.log(this.props.children.authResp);
      })
      // .then(
      //   this.setState(this.cardText = this.state.authResp)
      // )
      .then(
        console.log(this.state)
      )
      .catch(error => {
          console.log(error);
          throw error;
    });
  };


  render() {
    return (
      <>
        <Heading />
        <br />
        <div class="container">
          <PayForm 
            formData={this.state}
            onSubmit={this.handleFormSubmit.bind(this)} 
            onChange={this.handleChange}
            populate={this.state}
          />
        </div>
        <div>
          <Panel>            
            <CardText 
            cardText=
            {JSON.stringify(this.state, null, 10)}
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
