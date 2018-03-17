const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log(hr,min,sec);
let hrPosition = hr*360/12+(min*360/60)/12;
let miPosition=min*360/60 + (sec*360/60)/60;
let sePosition=sec*360/60; 
function theClock(){
    hrPosition = hrPosition + (3/360);
    miPosition = miPosition +(6/60);
    sePosition = sePosition +6;
HOURHAND.style.transform = "rotate(" + hrPosition +"deg)";
MINUTEHAND.style.transform = "rotate(" + miPosition +"deg)";
SECONDHAND.style.transform = "rotate(" + sePosition +"deg)";
}
var setInterval = setInterval(theClock, 1000);