// a single JS function to do it all
function displayTime() {
  let date = new Date(); //native JS Object
  let hour = date.getHours(); // counting 0 to 23
  let min = date.getMinutes(); // counting 0 to 59
  let sec = date.getSeconds(); // counting 0 to 59

  // shift between AM and PM using if clause
  let amPm = "AM";
  if (hour >= 12) {
    amPm = "PM";
  }

  // alter 24 hours count make 12 hours count instead
  // you may use a ternary operator of an if clause
  //   hour = hour > 12 ? hour - 12 : hour;
  if (hour > 12) {
    hour -= 12;
  }
  // place a 0 before single digit hour/minute/second counts
  // using ternary operators
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // show count on page
  document.getElementsByClassName("the_clock")[0].innerHTML =
    hour + " : " + min + " : " + sec + " " + amPm;
}

// call your function and also update time every half second
setInterval(displayTime, 500);
