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
    var inner_text = [$(".work_experience"),$(".projects"),$(".blog")];
    var inner_lines = [$(".inner_right"),$(".inner_left"),$(".inner_vertical")];
    var fill = [$("#exp_fill")];

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
          $(this).closest("div").find("p").fadeIn("slow");
        },
        function (){
          $(this).closest("div").find("p").fadeOut("slow");
        }
      );
    }

    //On Hover Animate Center Hex
    for(var i = 0; i < 1; i++){
      var first = (i + 1) % 3;
      var second = (i + 2) % 3;
      var x_dist, y_dist;

      //Set how far lines must move
      if(i == 0){
      	x_dist = 0;
	y_dist = 125;
      }
      else if(i == 1){
        x_dist = 250;
        y_dist = -125;
      }
      else if(i == 2){
        x_dist = -250;
        y_dist = -125;
      }

      //On hover, animate
      inner_text[i].hover(
	function (){
	  inner_text[first].fadeOut("fast");
	  inner_text[second].fadeOut("fast");
	  inner_lines[second].fadeOut("fast");
	  inner_lines[i].animate({top:"+=" + y_dist, left:"+=" + x_dist});
	  inner_lines[first].animate({top:"+=" + y_dist, left:"+=" + x_dist});
	  fill[i].fadeIn("slow");
	},
	function (){
	  fill[i].fadeOut("slow");
	  inner_lines[i].animate({top:"-=" + y_dist, left:"-=" + x_dist});
	  inner_lines[first].animate({top:"-=" + y_dist, left:"-=" + x_dist});
	  inner_lines[second].fadeIn("fast");
	  inner_text[first].fadeIn("fast");
	  inner_text[second].fadeIn("fast");
	}
      );
    }

});
