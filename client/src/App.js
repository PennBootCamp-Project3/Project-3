import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import Bill from "./pages/Bill";
import Report from "./pages/Report";
import Bolt from "./pages/Bolt";
import Config from "./pages/Config";
import Logout from "./pages/Logout";
import Landing from "./pages/Landing";

class App extends Component {

    render() {
      return (
        <div>
            <Router>
              <switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/home" component={Home}/>
                <Route path="/pay" component={Pay}/>
                <Route path="/bill" component={Bill}/>
                <Route path="/report" component={Report}/>
                <Route path="/bolt" component={Bolt}/>
                <Route path="/config" component={Config}/>
                <Route path="/logout" component={Logout}/>
              </switch>
            </Router>
        </div>
      );
    }
  }

export default App;
