//EVent handling in class component
 
/*in class component we define event handlere as methos 
in fucntional coompoenent we define event handler as function*/
import React, { Component } from "react";

class ClassClick extends Component {
clickHandler(){
        console.log("hiiii")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
