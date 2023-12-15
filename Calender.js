import React, { useState } from "react"; import Calendar from "react-calendar"; import "react-calendar/dist/Calendar.css"; import "./Calendar.css";
function Calendar () { const allMonthValues = [
"January","February","March","April","May","June","July","August","September", "October","November","December"];
const [selectedDate, setSelectedDate] = useState();
const [calendarText, setCalendarText] = useState(`No Date is selected`); const handleDateChange = (value) => {
setSelectedDate(value);
setCalendarText(`The selected Date is ${value.toDateString()}`);}; const handleYearChange = (value) => {
const yearValue = value.getFullYear(); setCalendarText(`${yearValue} Year is selected`);
};
const handleMonthChange = (value) => {
const monthValue = allMonthValues[value.getMonth()]; setCalendarText(`${monthValue} Month is selected`);
};
 
return (
<div className="app1">
<h2 className="calander-details">{calendarText}</h2>
<Calendar onClickMonth={handleMonthChange} onClickYear={handleYearChange} onChange={handleDateChange} value={selectedDate}/>
</div>);}
export default Calendar;


.app1 {
display: flex; gap: 20px; justify-content: center;
align-items: center; color:black; flex-direction: column;	height: 100vh; font-family:Georgia, Times, "Times New Roman", serif;
}
