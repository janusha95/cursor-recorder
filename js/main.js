const start = document.getElementById("start");
const stop = document.getElementById("stop");
var cur = document.getElementById("cur");
var values = [];
var i = 0;
var length = 0;
var r;

start.addEventListener("click", recordOrreplay);  
stop.addEventListener("click", stopOrclear);

function recordOrreplay() {
    if (start.firstChild.textContent === "START RECORDING") {
      document.addEventListener("mousemove", record);
      start.removeEventListener("click", recordOrreplay);
    } else {
      start.removeEventListener("click", recordOrreplay);
      i = 0;
      cur.style.display = "inline-block";
      cur.style.top = values[i][1];
      cur.style.left = values[i][0];
      r = setInterval(play, 10);
    }
}
  
function stopOrclear() {
    if (stop.firstChild.textContent === "STOP RECORDING" && values.length > 0) {
      document.removeEventListener("mousemove", record);
      length = i;
      i = 0;
      document.querySelector("#start p").textContent = "REPLAY";
      document.querySelector("#stop p").textContent = "CLEAR";
      start.addEventListener("click", recordOrreplay);
    } else {
      i = 0;
      length = 0;
      values = [];
      cur.style.display = "none";
      document.querySelector("#start p").textContent = "START RECORDING";
      document.querySelector("#stop p").textContent = "STOP RECORDING";
    }
}

function record(e) {
  values[i] = [];
  values[i][0] = e.clientX;
  values[i][1] = e.clientY;
  i++;
}

function play() {
  if (i == length) {
    clearInterval(r);
    start.addEventListener("click", recordOrreplay);
  } else {
    cur.style.top = values[i][1] + "px";
    cur.style.left = values[i][0] + "px";
    i++;
  }
}

