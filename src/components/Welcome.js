//class component 
import React, { Component } from 'react' ;

class Welcome extends Component{
    render() {
        return <h1>Namaste {this.props.name} React{this.props.sirname}  </h1>
    }
}
export default Welcome;
