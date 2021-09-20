const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const bodyEl = document.querySelector("body");
const startBtnEl = document.querySelector('button[data-action="start"]');
const stopBtnEl = document.querySelector('button[data-action="stop"]');

startBtnEl.addEventListener("click", startСhangeСolor);
stopBtnEl.addEventListener("click", stopСhangeСolor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;
let isActiveBtn = false;

stopBtnEl.setAttribute("disabled", "disabled");

function startСhangeСolor() {
  if (isActiveBtn) {
    return;
  }
  isActiveBtn = true;
  stopBtnEl.removeAttribute("disabled");
  startBtnEl.setAttribute("disabled", "disabled");

  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = `${
      colors[randomIntegerFromInterval(0, colors.length - 1)]
    }`;
  }, 1000);
}

function stopСhangeСolor() {
  clearInterval(intervalId);

  isActiveBtn = false;
  startBtnEl.removeAttribute("disabled");
  stopBtnEl.setAttribute("disabled", "disabled");
}
