import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardImage,
  CardBody,
  CardGroup
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
          <div class="text-white text-center rgba-stylish-strong py-5 px-4" style={{ height: "500px" }}>
            <div class="py-5">
              <h1 class="card-title h1 my-4 py-2">Welcome to ReactPay!</h1>
              <p class="mb-4 pb-1 px-md-2 mx-md-5">
                ReactPay is an integration tool used by merchants to seamlessly
                streamline their payment processing systems.
              </p>
            </div>
          </div>
        </div>

        <div>
        <br />
          <CardGroup deck>
            <Card>
              <CardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Setup Your Account</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/pay/" color="primary">Go</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Choose Your Frequency</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/bill/" color="primary">Go</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Get Your Reports</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/report/" color="primary">Go</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">A Nice to Have</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/bolt/" color="primary">Go</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Set Your Configuration</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/config/" color="primary">Go</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Logout of Your Account</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button href="/" color="primary">Logout</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}
