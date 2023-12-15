import rvr from './rvr.jpg' import './Registration.css' import {useState} from 'react' function Registration(){
const [Name,setName]=useState("") const [Mobile,setMobile]=useState("") const [Age,setAge]=useState("")
const [Email,setEmail]=useState("")
const [Password,setPassword]=useState("") return (
<center>
<h1>R.V.R & J.C College of Engineering</h1>
<div className='main1'>
<div className='App'>
<header className='App-header'>
<img src={rvr} className='App-logo' alt='rvr'/>
</header></div><div className='main'>
<h2>STUDENT REGISTRATION FORM</h2>
<form><pre>
<b>Name	: </b><input className='input' placeholder='Name' onChange={(e)=> setName(e.target.value)}/><br/>
 
<b>Mobile	: </b><input className='input' placeholder='Mobile' onChange={(e)=> setMobile(e.target.value)}/><br/>
<b>Age	: </b><input className='input' placeholder='Age' onChange={(e)=> setAge(e.target.value)}/><br/>
<b>Email	: </b><input className='input' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/><br/>
<b>Password	: </b><input className='input' type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
<b>Confirm Password : </b><input className='input' type='password' placeholder='Confirm Password' onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
<b>Address	: </b>
<textarea rows="4" cols="31" className='input' placeholder='Address' onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
<div className='gender'><b>Gender	: </b>
<input type='radio' className='input1' name='gender'/>Male
<input type='radio' className='input1' name='gender'/>Female
<input type='radio' className='input1' name='gender'/>Transgender <br/>
</div></pre>
<button type='submit' className='button'>Login</button>
<button type='submit' className='button'>SignUp</button>
</form></div></div>
</center>)}
export default Registration;
