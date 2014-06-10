var rand = Math.floor((Math.random() * 100) + 1);
$(document).ready(function () {
    "Use Strict";

    var html_height = $("html").height();
    var window_height = $(window).height();
    var difference = (window_height - html_height);

    function get_num_fact(){
      $.get("http://numbersapi.com/" + rand + "/math",
            function (data){ $("#number_fact").text(data);
                             window.console.log("Finished adding number_api text");
      });
    }

    $("footer").css("bottom", -1 * difference);

    get_num_fact();

    var quote_height = $("#number_fact").height();
    var hexagon_height = $(".right_hex_wrapper").height();

    $("#number_fact").css("top", hexagon_height/3 - quote_height/2);
    $("#credit").css("top", hexagon_height/3 - quote_height/2);

    window.console.log(hexagon_height);
    window.console.log(quote_height);
    window.console.log(hexagon_height/3 - quote_height/2);
});
