const secondHand = document.querySelector('.second-hand ');
const minHand = document.querySelector('.min-hand ');
const hourHand = document.querySelector('.hour-hand ');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  // Fix secondhand reverse transition between 59 & 0 sec
  if (seconds === 0) {
    secondHand.classList.add('hand-transition');
  } else {
    secondHand.classList.remove('hand-transition');
  }

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  // Fix minhand reverse transition between 59 & 0 sec
  if (mins === 0) {
    minHand.classList.add('hand-transition');
  } else {
    minHand.classList.remove('hand-transition');
  }

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  // Fix hourhand reverse transition between 23 & 0 sec
  if (hour === 0) {
    hourHand.classList.add('hand-transition');
  } else {
    hourHand.classList.remove('hand-transition');
  }
}

setInterval(setDate, 1000);
