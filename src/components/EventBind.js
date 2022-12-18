///Event binding in class component

import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "HEllo",
    };
  }
  clickHandler() {
   /* this.setState({
      message: "Goodbye",
    });*/
    console.log(this); 
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
