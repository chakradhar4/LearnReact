//satte in class component 
//type rce to generate class component snippet 

import React,{Component} from 'react' ;

class Counter extends Component{
//rconst to generate constructor snippet
   constructor(props){
    super(props)
    this.state = {
        count : 0 
    }
   }
   changeCount(){
    this.setState({
        count : + 1
    })
    };

    render(){
        return(
            <div>
               Count  - {this.state.count}
               <button onClick={()=>this.changeCount()}>Add count</button>
            </div>
        )
    }
}

export default Counter;