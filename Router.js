import "./Router1.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; import Home from "./Comp/Home";
import About from "./Comp/About";
import ContactUs from "./Comp/ContactUs"; function Router1() {
return (<><Router>
<Routes><Route Exact path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contactus" element={<ContactUs />} />
<Route path="*" element={<Navigate to="/" />} />
</Routes></Router></>);} export default Router1;
