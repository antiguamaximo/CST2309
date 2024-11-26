/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Maximo Antigua
   Date:   11/25/24

*/
showClock();
setInterval("showClock()", 1000);



function showClock() {
   var thisDay = new Date("May 9, 2021 09:31:27");
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
   document.getElementById("currentTime").innerHTML = localDate +"<br>"+ localTime;
   var j4Date = nextJuly4(thisDay());

   // j4Date = j4Date.setHours(21);
   document.getElementById("days").textContent = Math.floor(j4Date);
   var hrsLeft =(j4Date - Math.floor(j4Date))*24;
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);

}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}