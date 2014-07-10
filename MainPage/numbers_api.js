var rand = Math.floor((Math.random() * 100) + 1);

$(document).ready(function () {
    "Use Strict";

    var html_height = $("html").height();
    var window_height = $(window).height();
    var difference = window_height - html_height;
    var number_fact = $("#number_fact");
    var banner = $(".banner_wrapper");
    var icon = [$("#facebook"), $("#github"), $("#resume"), $("#linkedin")];
    var icon_img = [];
    var inner_text = [$("#workexp_link"),$("#projects_link"),$("#blog_link")];
    var inner_lines = [$("#inner_right"),$("#inner_left"),$("#vertical")];
    var fill = [$("#exp_fill"),$("#proj_fill"),$("#blog_fill")];

    //Initialize icon_img array
    for(var i = 0; i < 4; i++){
      icon_img[i] = icon[i].find("img");
    }

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

    function animate_hexagon(j){
      var first = (j + 1) % 3;
      var second = (j + 2) % 3;

      inner_text[j].hover(
        function(){
          inner_lines[second].stop().fadeToggle("fast",false);
          inner_text[first].stop().fadeToggle("fast",false);
          inner_text[second].stop().fadeToggle("fast",false);
          inner_lines[first].addClass("forward" + j);
          inner_lines[j].addClass("forward" + j);
          fill[j].stop().fadeIn(3500,false);
        },
        function(){
          fill[j].stop().fadeOut("slow",false);
          inner_lines[second].stop().fadeToggle("slow",false);
          inner_text[first].stop().fadeToggle("slow",false);
          inner_text[second].stop().fadeToggle("slow",false);
          inner_lines[first].removeClass("forward" + j);
          inner_lines[j].removeClass("forward" + j);
        }
      );
    }

    //Get and display number fact from Numbers API
    get_num_fact();

    //Place the footer at the bottom of the window
    if(difference >= 0){
      $("footer").css("bottom", -1 * difference);
    }

    //Equally space the banner items
    var margin_banner = (banner.width() - 4 * icon[0].width())/8;

    for(var i = 0; i < 4; i++){
      icon[i].css("margin-left", margin_banner);
      icon[i].css("margin-right", margin_banner);
      icon[i].find(".icon").css("left", 22.5);
      icon[i].find(".icon").css("top", 2);
    }

    for(var i = 0; i < 4; i++){
      icon_img[i].hover(
        function (){
          $(this).closest("div").find("p").stop().fadeIn("slow");
        },
        function (){
          $(this).closest("div").find("p").stop().fadeOut("slow");
        }
      );
    }

    //On Hover Animate Center Hex
    for(var i = 0; i < 3; i++){

      //Call function to animate on hover
      animate_hexagon(i);
    }
});