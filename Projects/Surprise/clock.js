var countDownDate = new Date("nov 27, 2020 00:00:00").getTime();
var x = setInterval(function() {
var clock = document.getElementById("clock");
var clock_text = document.getElementById("clock-text");
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  clock.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "; 
  clock_text.innerHTML = "You will have to wait a bit longer";
  if (distance < 0) {
    clearInterval(x);
    clock_text.innerHTML = "Well the day has come";
    clock.innerHTML = "Click me";
    clock.href = "https://acegoal07.github.io/Projects/Surprise/secret";
  }
}, 1000);