//rfce shortcut to create function   compoenent in react
//event handling in functional component
import React from "react";
const FunctionClick = ()=>
{
    function clickHandler() {
        console.log("Button Clicked");
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
/*function FunctionClick() {
  return (
    <div>
      <button>Click</button>
    </div>
  );
}*/

export default FunctionClick;
