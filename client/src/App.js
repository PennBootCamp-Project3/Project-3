import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import Bill from "./pages/Bill";
import Report from "./pages/Report";
import Config from "./pages/Config";
import Logout from "./pages/Logout";
import Landing from "./pages/Landing";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <switch>
            <Route exact path="/" component={Landing} />
            <Route path="/Home" component={Home} />
            <Route path="/Pay" component={Pay} />
            <Route path="/Bill" component={Bill} />
            <Route path="/Report" component={Report} />
            <Route path="/Config" component={Config} />
            <Route path="/Logout" component={Logout} />
          </switch>
        </Router>
      </div>
    );
  }
}

export default App;
