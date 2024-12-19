let x = 0;
const counterDisplay = document.getElementById('counterDisplay');
function CountUp() {
  x++;
  updateCounter();
}
function CountDown() {
  x--;
  updateCounter();
}
function updateCounter() {
  counterDisplay.textContent = x;
}
