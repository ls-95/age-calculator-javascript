let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
// This sets the max attribute of the date input to today's date, which prevents users from selecting any future dates.
// new Date().toISOString().split("T")[0]: This generates today's date in YYYY-MM-DD format.
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.innerHTML = `Your are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old!`;
}

// How many days are in a specific month of a given year:
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
// The third value is the day of the month, but using 0 means you’re telling JavaScript to go to the "last day of the previous month." So if you say new Date(2024, 2, 0), it will give you the last day of February 2024. getDate() gives you the number of that day ex. February 2024 - 29 days (leap year).
