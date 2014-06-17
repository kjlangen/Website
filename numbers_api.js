var rand = Math.floor((Math.random() * 100) + 1);
$(document).ready(function () {
    "Use Strict";

    var html_height = $("html").height();
    var window_height = $(window).height();
    var difference = (window_height - html_height);
    var number_fact = $("#number_fact");

    function get_num_fact(){
      $.get("http://numbersapi.com/" + rand + "/math",
            function (data){number_fact.text(data);
                            var quote_height = number_fact.height();
                            var hexagon_height = $(".right_hex_wrapper").height();
                            var credit_height = $("#credit").height();
                            var text_distance_down = (hexagon_height - quote_height - credit_height)/2;
                            $("#number_fact").css("top", text_distance_down);
                            $("#credit").css("top", text_distance_down);
      });
    }

    get_num_fact();

    $("footer").css("bottom", -1 * difference);
});
