//updates to display current day of the week, month, and day to currentDay id
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//updates current time for time-block arguments
var currentTime = moment().hour();
console.log(currentTime);

//function to update block class depending on the current time
function timeUpdate(){
$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id"));
//if the current time is greater than a block time then it will replace it with .past class
  if (currentTime > blockTime){
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
    } //if the block-time and current time are the same then the .present class replaces current class
    else if(blockTime === currentTime){
    $(this).removeClass("future");
    $(this).addClass("present");
    $(this).removeClass("past");
    }
    else{ //if neither other arguments are true then .future class replaces current class
    $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");
    }
})
}

function saveButton() {
    //on click event listener
    $(".saveBtn").on("click", function () {
        //gets nearby values of user input 
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //saves user input in local storage
        localStorage.setItem(time, text);
    })
}

//all user inputs saved in local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


$(document).ready(saveButton());

timeUpdate(currentTime);