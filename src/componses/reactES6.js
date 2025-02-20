import React from 'react'
import model from './model';

function reactES6() {

//arrow fuction ES6
    const arrowES6 = function() {
        return "dharsan-arrowes6";
    }

//class ES6
class dh {
    constructor(name){
        this.brand = name;
    }
}
const dhar = new dh('dharsan class ES6');

// variables
var a=10;
var b =20;
var c =a+b;

//arrow method
const arrowmethod =['dharsan','BE CSE',2024]

const arrowmap =arrowmethod;





//Destructuring
const des ={
    name : "dharsan",
    course :"BE CSE",
    passout : 2024,
}

const dhe = des



//Spread Operator
const spread ="dharsan";
const spread1=" is a MERN";
const spread2 =[...spread,...spread1];

// Ternary Operator
const u=10;
 const p=20;
const ternary = u>p;

  return (
    <div><h1>reactES6</h1>
    <h1> classes-{dhar.brand}</h1>
    <h1> arrow function-{arrowES6()}</h1>
    <h1> variables-{c}</h1>
    <h1>arrow method</h1>
    {arrowmap.map((shortname)=>(<li>{shortname}
        </li>))}
<h1>Destructuring:</h1>
<ol><li>{dhe.name}</li>
<li>{dhe.course}</li>
<li>{dhe.passout}</li>
</ol>
<h1>Spread Operator-{spread2}</h1>
<h1>modules:</h1>
    <h1>{model()}</h1>

    <h1>Ternary Operator:{ternary?"true":"false"}</h1>
    
    </div>
  )
}

export default reactES6