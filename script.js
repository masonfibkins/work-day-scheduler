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
    console.log(blockTime);
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

timeUpdate(currentTime);

