//updates to display current day of the week, month, and day to currentDay id
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentTime = moment().hour();
console.log(currentTime);

$(".time-block").each(function () {
//.past
  if (currentTime > 17){
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
    }
})