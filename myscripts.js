// This is to display current day of the week.
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];

// Update the elements with data-testid attributes
const updateDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');

updateDay.textContent = currentDay;

// This is to display current UTC TIME .

const updateTime = document.querySelector('[data-testid="currentUTCTime"]');

function updateUTCTime() {
  const currentTimeInMilliseconds = new Date().getTime();
  updateTime.textContent = currentTimeInMilliseconds;
}

// Update the time every second (1000 milliseconds)
setInterval(updateUTCTime, 1000);

// Initial update
updateUTCTime();

// Creating a smooth scroll effect//
