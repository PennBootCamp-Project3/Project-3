import React, { Component } from "react";

export class Panel extends Component {
  render() {
    const { children } = this.props;
    return <div className="col-md-6">{children}</div>;
  }
}

export default Panel;
