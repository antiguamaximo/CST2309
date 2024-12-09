"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Maximo Antigua  
   Date:   091224

*/
showClock();

setInterval("showClock()", 1000);

function showClock() {
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   document.getElementById("localDate").textContent = localDate;
   document.getElementById("localTime").textContent = localTime;

   var j4Date = nextJuly4(thisDay);
   j4Date.setHours(21);

   /*Calculate the days until January 1st */
   var daysLeft = (j4Date - thisDay)/(1000*60*60*24);
   
   /*Display the time left until New Year's Eve */
   document.getElementById("dLeft").textContent = Math.floor(daysLeft);
   /*Calculate  the hours left in the current day*/
   var hrsLeft =(daysLeft - Math.floor(daysLeft))*24;
   document.getElementById("hLeft").textContent = Math.floor(hrsLeft);
   
   /* Calculate the minutes and seconds left in the current hour */
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
   document.getElementById("mLeft").textContent = Math.floor(minsLeft);
   document.getElementById("sLeft").textContent = Math.floor(secsLeft);

}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}