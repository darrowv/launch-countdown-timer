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
const countDownDate = new Date().getTime() + inMilliseconds(14, "days");

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
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the page
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the count down is finished, do this
  if (distance < 0) {
    clearInterval(x);

    // document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const element = document.getElementById("seconds");

// create an observer instance
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    element.classList.remove("flip");
    void element.offsetWidth;
    element.classList.add("flip");
  });
});

// pass in the target node, as well as the observer options
observer.observe(document.getElementById("seconds"), { childList: true });

// later, you can stop observing
// observer.disconnect();
