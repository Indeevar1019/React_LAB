import React, { useState } from "react"; import "./Login.css";
function App6() {
const [errorMessages, setErrorMessages] = useState({}); const [isSubmitted, setIsSubmitted] = useState(false); const data = [
{username: "chrb",password: "abc"},
{username: "rishi",password: "def"},
{username: "RVR",password: "def"}
];
const errors = {uname: "Invalid Username",pass: "Invalid Password"}; const handleSubmit = (event) => {
event.preventDefault();
var { uname, pass } = document.forms[0];
const userData = data.find((user) =>user.username === uname.value); if (userData) {
if (userData.password !== pass.value) {
setErrorMessages({ name: "pass", message: errors.pass });
} else {setIsSubmitted(true);}
} else {setErrorMessages({ name: "uname", message: errors.uname });}
};
const renderErrorMessage = (name) => name === errorMessages.name && (
 
<div className="error">{errorMessages.message}</div>); const WebForm = (
<div className="form"><form onSubmit={handleSubmit}>
<div className="input-container"><label>Username </label>
<input type="text" name="uname" required />
{renderErrorMessage("uname")}</div>
<div className="input-container"><label>Password </label>
<input type="password" name="pass" required />
{renderErrorMessage("pass")}</div>
<div className="button-container">
<input type="submit" value="LOGIN"/>
</div></form></div>); return (
<div className="main1">
<div className="login-form">
<div className="title">Sign In</div>
{isSubmitted ? <div>User is successfully logged in</div> : WebForm}
</div></div>);} export default Login;
