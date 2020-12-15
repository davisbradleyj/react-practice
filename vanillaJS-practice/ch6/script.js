const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runClock() {
  var date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("The Time is " + hr + ":" + min + ":" + sec)

  let hrPos = (hr*(360/12))+(min*(360/60)/12);
  let minPos = (min*(360/60))+(sec*(360/60)/60);
  let secPos = sec*(360/60);

  console.log(hrPos,minPos,secPos)

  HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
}

let interval = setInterval(runClock, 1000);