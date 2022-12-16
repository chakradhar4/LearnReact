//functional component
/*
import React from 'react'
$
function Greet() {
    return <h1>Hellow welcome to</h1>

}

export default Greet */

//component usig arrow function 
//props is paramter we add to customize and make function reusable

//const Greet = (props) =>{
    const Greet=({name,sirname}) => {  //destructuring in the parameter
 //     const {name,sirname} = props  destructuring in the function
        return(
    <div> 
 <h1> Namste {name} {sirname}</h1>
  {props.children}
 </div>
 )
}
export default Greet;
