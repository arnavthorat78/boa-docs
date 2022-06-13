// Timeout

const percentageElement = document.querySelector("#percentage");
let percentage = 0;

function process() {
  percentage += parseInt(Math.random() * 10);

  if (percentage > 100) {
    percentage = 100;

    setTimeout(() => {
      location.replace("index.html");
    }, 1500);
  }

  percentageElement.innerText = percentage;
  processInterval();
}

function processInterval() {
  setTimeout(process, Math.random() * (1000 - 500) + 500);
}

processInterval();

// Double-click

const body = document.querySelector("body");

body.addEventListener("dblclick", () => {
  location.replace("index.html");
});
