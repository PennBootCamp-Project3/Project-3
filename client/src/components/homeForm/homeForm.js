import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardImage,
  CardBody,
  CardGroup,
  Fa
} from "mdbreact";
import "./homeForm.css";

export default class HomeForm extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div
          class="card card-image"
          style={{
            height: "500px",
            backgroundImage:
              "url(" +
              "https://www.lvvwd.com/assets/images/about-us-pay-bill-16x7.jpg" +
              ")"
          }}
        >
          <div
            class="text-white text-center rgba-stylish-strong py-5 px-4"
            style={{ height: "500px" }}
          >
            <div class="py-5">
              <h1 class="card-title h1 my-4 py-2">Welcome to ReactPay!</h1>
              <p class="mb-4 pb-1 px-md-2 mx-md-5">
                ReactPay is an integration tool used by merchants to seamlessly
                streamline their payment processing systems.
              </p>
            </div>
            <Button
              href="https://github.com/PennBootCamp-Project3/react-pay"
              color="indigo"
            >
              <Fa icon="clone left" /> View the Code
            </Button>
          </div>
        </div>

        <div>
          <br />
          <CardGroup deck>
            <Card>
              <CardImage
                src="https://cnet4.cbsistatic.com/img/Rqm7hXG97mXSygSDCGUGkGwisKw=/1600x900/2017/03/23/0beb231b-cfdc-4229-9752-8b095e6dcc92/credit-card-processing-pos.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
                height="140px"
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">Setup Your Account</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/pay/" color="indigo">
                  Go
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://www.patriotsoftware.com/payroll/training/blog/wp-content/uploads/2014/10/pay-frequency-RS11238-compressor.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
                height="140px"
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">Choose Your Frequency</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/bill/" color="indigo">
                  Go
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/114/132/80403526.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
                height="140px"
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">View Your Reports</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/report/" color="indigo">
                  Go
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardImage
                src="https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
                height="140px"
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">Set Your Configuration</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/config/" color="indigo">
                  Go
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://i.amz.mshcdn.com/-EF6JaCjF7129H3sCEzt9M-nO5o=/fit-in/850x850/https%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fvince-vaughn-stock-photos%2FiStock-Unfinished-Business-5.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
                height="140px"
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">Logout of Your Account</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/" color="indigo">
                  Logout
                </Button>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}
