//creating compenent using jsx 

import React from 'react';

const Hello = (parm) => {
    return(
        <div>
            <h1>HEllo {parm.sir} using usx function component</h1>
            {parm.children}
        </div>
    )
}

export default Hello;