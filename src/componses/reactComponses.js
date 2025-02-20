import React from 'react'

/// class and construtor
class Dharsanclass extends React.Component{
    constructor(){
        super();
        this.state ={dharsan:"react componses and construtor"}

    }

    render(){
        return <h1>class react {this.state.dharsan} </h1>
    }
}



// function 
function Dharsanfunction(){
    return(
        <div>
            <h1>hi dharsan one outside the on function</h1>
            </div>
    )
}



function reactComponses() {
    
   
  return (
    <div><h1> one fuction</h1>
    <Dharsanfunction/>
    <Dharsanclass />
    </div>
  )
}

export default reactComponses