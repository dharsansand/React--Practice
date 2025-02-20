import React from 'react'




function Props1 (dharsan){
    return(
       <h1>{dharsan.name}</h1>
    )
}


class Props2 extends React.Component {
    render(){
        return <h1>{this.props.name}</h1>
    }

}


function props() {
    


  return (
    
    <div>
        <h1><Props1 name="dharsanfunction"/></h1>
        <h1><Props2 name="dharsan Class "/></h1>
    </div>

  )
}

export default props