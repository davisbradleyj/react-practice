const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPos, minPos, secPos;

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("The Time is " + hr + ":" + min + ":" + sec)

HOURHAND.style.transform = "rotate(" + hrPos + " deg)";
MINUTEHAND.style.transform = "rotate(" + minPos + " deg)";
SECONDHAND.style.transform = "rotate(" + secPos + " deg)";

