//creating component without using jsx 
import React from 'react';

const HelloSX= () =>{
    return React.createElement('div',null,<h1>HEllo react without using jsx</h1>)
};

export default HelloSX;
