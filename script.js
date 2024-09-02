let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
// This sets the max attribute of the date input to today's date, which prevents users from selecting any future dates.
// new Date().toISOString().split("T")[0]: This generates today's date in YYYY-MM-DD format.
