//class component 
import React, { Component } from 'react' ;

class Welcome extends Component{
    render() 
    {
        const{name,sirname} = this.props   //destructuring in class component 
         return(<h1>Namaste {name} React {sirname}  </h1>
    )}
}
export default Welcome;
