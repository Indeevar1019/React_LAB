import React from "react"; import "./Counter.css";
class Counter1 extends React.Component{ constructor(){
super();
this.state={ counter:0 };} Incr=()=>{this.setState({counter:this.state.counter+1}); }; Decr=()=>{this.setState({counter:this.state.counter-1});} render(){
const mystyle={textAlign:"center"} return(
<center>
<div className="main" >
<h1 style={mystyle}>Counter Application : ReactJS</h1>
<h2 style={mystyle}>Counter = {this.state.counter}</h2>
<div style={mystyle}><button className="button" onClick={this.Incr} >Increment</button>
<button className="button" onClick={this.Decr}>Decrement</button>
</div></div>
</center>)}}
export default Counter1;
