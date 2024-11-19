/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Maximo Antigua  
   Date:   111824

*/
/*Store the current date and time */
var currentDay = new Date("Nov 18, 2024 7:10:50"); 
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display the current date and time */
document.getElementById("dateNow").innerHTML = 
dateStr +"<br>"+ timeStr;

window.alert("Welcome to Tulsa");

/*Display the time left until New Year's Eve */
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";
