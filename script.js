// Get references to the HTML elements that will display the hours, minutes, and seconds.
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// Set up a function to update the time every second.
setInterval(() => {
  // Create a new Date object to get the current time.
  let currentDate = new Date();

  // Update the content of the hours element, ensuring it's displayed as two digits.
  hrs.textContent =
    (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();

  // Update the content of the minutes element, ensuring it's displayed as two digits.
  min.textContent =
    (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();

  // Update the content of the seconds element, ensuring it's displayed as two digits.
  sec.textContent =
    (currentDate.getSeconds() < 10 ? "0" : "") + currentDate.getSeconds();
}, 1000); // The code within this function runs every 1000 milliseconds (1 second).
