var rand = Math.floor((Math.random() * 100) + 1);
$(document).ready(function () {
    $.get("http://numbersapi.com/" + rand + "/trivia", function (data){
      $("#number_fact").text(data);
    });
});