import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayForm from "../../components/payForm";
import { Card,CardBody,CardTitle } from "reactstrap";
import CardText from "../../components/cardtext";
import FooterPage from "../../components/footer";
import API from "../../utils/API";

class Pay extends Component {
constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      request: {},
      response:{}
    };
}

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      request:{...this.state.request,
        [name]: value
      }
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.props);
      API.runAuth(this.state.request)
      .then(result => {
<<<<<<< HEAD
          this.setState({response:result.data });
=======
          console.log(result.data);
          console.log(this.state);
          // this.setState({
          //   state = result.data
          // })
          // console.log(props);
          // this.setState({update: result.data});
>>>>>>> 6d4e790f1a3dcaa048962f6c05781bf886f5d7a9
      })
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
<<<<<<< HEAD
            formData={this.state.request}
            onSubmit={this.handleFormSubmit.bind(this)} 
=======
            formData={this.state}
            onSubmit={this.handleFormSubmit} 
>>>>>>> 6d4e790f1a3dcaa048962f6c05781bf886f5d7a9
            onChange={this.handleChange}
            populate={this.state.response}
          />
        </div>
        <div>
          <Card>   
            <CardBody>  
              <CardTitle>JSON Output</CardTitle> 
            <CardText 
            cardText=
            {`Request: ${JSON.stringify(this.state.request, null, 10)}

            Response: ${JSON.stringify(this.state.response, null, 10)}`}
            />

            </CardBody>     
          </Card>
        </div>
    
        <div>
          <FooterPage />
        </div>
      </>
    );
  }
}

export default Pay;
