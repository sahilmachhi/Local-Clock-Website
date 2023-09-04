function curTime() {
  // fetchin time

  let currentTime = new Date();

  let years = currentTime.getFullYear();

  let months = currentTime.getMonth();

  let days = currentTime.getDay();

  let hours = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();

  let min =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

  let sec =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  let day = currentTime.getUTCDay  
  // 24 to 12 hours conversion and AM PM logic

  if (hours >= 12) {
    hours = hours - 12;
  }

  let ampm = hours <= 12 ? "PM" : "AM";

  //displaying time and date

  let date = document.querySelector(".date");
  date.innerHTML = days + "/" + months + "/" + years;

  let time = document.querySelector(".time");
  time.innerHTML = hours + ":" + min + ":" + sec + " " + ampm;
}

//time refresh and function call

setInterval(curTime, 1000);