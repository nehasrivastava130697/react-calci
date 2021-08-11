import React from "react";
import Keypad from "./Keypad";
import Operator from "./Operator";
import Output from "./Output";
import "./Calculator.css";
 class Calculator extends React.Component{
    /* constructor(){
        super();
         this.state ={
            result:0
         }
     }*/
  state = {
       result:'0'
   }

buttonPressed = (buttonName)=>{
      
       this.setState({result:this.state.result+buttonName})
   }
clearOutput =()=>{
    this.setState({result:''})
}
answer=(expression)=>{
    let ans = 0;
    ans=eval(expression);
    console.log(ans);
    this.setState({result:ans});
}
  render=()=>
  {
      return(
        <div>
           <Output result={this.state.result}/>
            <Operator buttonPressed={this.buttonPressed}/>
            <Keypad buttonPressed={this.buttonPressed} clearOutput={this.clearOutput} answer={this.answer} result={this.state.result}/>
        </div>
      );
  }
  

 }
 export default Calculator;
