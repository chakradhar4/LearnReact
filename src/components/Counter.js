//satte in class component
//type rce to generate class component snippet

import React, { Component } from "react";

class Counter extends Component {
  //rconst to generate constructor snippet
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //altering the state using current state
//if code ha to be executed afer the state has beenn updated  place that code in the call back function which is the second argument to the setState method
/*  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback value", this.state.count);
      }
    );
*/
    //Directly modifying state
    //we should never directly modify state
    //this will increase the count we won't see it in the UI
 /*     this.state.count = this.state.count + 1;
    console.log(this.state.count);
  }
 */ 

  //altering the state using previoys state 
  //when you have to update state based on previous state pass functionas argument instead of regular object 
  increment(){
    this.setState(prevState=>({
        count :prevState.count+1
    }))
    console.log(this.state.count);
  }
  countFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        Count - {this.state.count}
        <br></br>
        <button onClick={() => this.countFive()}>Add count</button>
      </div>
    );
  }
}

export default Counter;
