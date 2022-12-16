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
const Greet = (props) =>{
    console.log(props);
 return(
    <div> 
 <h1> Namste {props.name} {props.sirname}</h1>
  {props.children}
 </div>
 )
}
export default Greet;
