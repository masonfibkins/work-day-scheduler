//updates to display current day of the week, month, and day to currentDay id
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));