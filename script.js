console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));