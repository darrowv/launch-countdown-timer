const daysNode = document.getElementById("days");
const hoursNode = document.getElementById("hours");
const minutesNode = document.getElementById("minutes");
const secondsNode = document.getElementById("seconds");

// turning time into milliseconds
const inMilliseconds = (quantity = 99, measure = "days") => {
  switch (measure) {
    case "days" || "day":
      return quantity * 24 * 60 * 60 * 1000;
    case "hours" || "hour":
      return quantity * 60 * 60 * 1000;
    case "minutes" || "minute":
      return quantity * 60 * 1000;
    default:
      return quantity * 1000;
  }
};

// Current date + custom time
const countDownDate = new Date().getTime() + inMilliseconds(10, "seconds");

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000) + 1;

  // Display the result in the page
  if (days.toString() !== daysNode.textContent) {
    daysNode.textContent = days;
  }
  if (hours.toString() !== hoursNode.textContent) {
    hoursNode.textContent = hours;
  }
  if (minutes.toString() !== minutesNode.textContent) {
    minutesNode.textContent = minutes;
  }
  secondsNode.textContent = seconds;

  // If the count down is finished, do this
  if (distance < 0) {
    clearInterval(x);
    daysNode.textContent++;
    hoursNode.textContent++;
    minutesNode.textContent++;
  }
}, 1000);

// create an observer instance
const daysObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    daysNode.classList.remove("pulse");
    void daysNode.offsetWidth;
    daysNode.classList.add("pulse");
  });
});

// pass in the target node, as well as the observer options
daysObserver.observe(daysNode, { childList: true });

// later, you can stop observing
// observer.disconnect();

const hoursObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    hoursNode.classList.remove("pulse");
    void hoursNode.offsetWidth;
    hoursNode.classList.add("pulse");
  });
});

hoursObserver.observe(hoursNode, { childList: true });

const minutesObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    minutesNode.classList.remove("pulse");
    void minutesNode.offsetWidth;
    minutesNode.classList.add("pulse");
  });
});

minutesObserver.observe(minutesNode, { childList: true });

const secondsObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    secondsNode.classList.remove("pulse");
    void secondsNode.offsetWidth;
    secondsNode.classList.add("pulse");
  });
});

secondsObserver.observe(secondsNode, { childList: true });
