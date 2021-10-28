const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

setInterval(() => {
  let now = new Date();
  let currentHour = now.getHours() * 30;
  let currentMin = now.getMinutes() * deg;
  let currentSec = now.getSeconds() * deg;

  hour.style.transform = `rotateZ(${currentHour + currentMin / 12}deg)`;
  min.style.transform = `rotateZ(${currentMin}deg)`;
  sec.style.transform = `rotateZ(${currentSec}deg)`;
});
