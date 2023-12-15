import React, { useState } from "react"; import logo from './logo.svg';
import "./Search.css"; function Search() { const list = [
"Y20CS021","Y20CS091","Y20CS171","Y20CE021","Y20CE091","Y20CE171",
"Ratna Babu","Rishi Babu","Deepak","Jyothi", "Sunil","Sitha"
];
const [filterList, setFilterList] = useState(list); const handleSearch = (event) => {
if (event.target.value === "") {setFilterList(list); return; } const filteredValues = list.filter( (item) =>
item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
); setFilterList(filteredValues);}; return (
<div className="app11">
<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" /></header>
<p >STUDENT INFORMATION SEARCH!</p></div>
 
<div><b>Search: <input name="query" type="text" onChange={handleSearch} />
</b></div>{filterList &&filterList.map((item, index) => (
<div key={index}>{item}</div> //Display each item))}</div>);} export default Search;
