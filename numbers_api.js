var rand = Math.floor((Math.random() * 100) + 1);
$(document).ready(function () {

    var html_height = $("html").height();
    var window_height = $(window).height();
    var difference = (window_height - html_height);
    $("footer").css("bottom", -1 * difference);

    $.get("http://numbersapi.com/" + rand + "/math", function (data){
      $("#number_fact").text(data);
    });
});
