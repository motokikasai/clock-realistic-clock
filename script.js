const secondHand = document.querySelector('.second-hand ');
const minHand = document.querySelector('.min-hand ');
const hourHand = document.querySelector('.hour-hand ');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  //   console.log(secondsDegree);

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
}

setInterval(setDate, 1000);
