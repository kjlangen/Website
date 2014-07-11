$(document).ready(function () {
  "Use Strict";

  var graphics = [$("#server_graphic"), $("#web_graphic"), $("#gol_graphic")];
  var horiz;

  for(var k = 0; k < graphics.length; k++){
    horiz = 2 * graphics[k].find(".leftbrace").width() + graphics[k].find(".project_title").width() + 15;
    graphics[k].width(horiz);
  }

  //Equally space the banner items
  var banner = $(".banner_wrapper");
  var icon = [$("#facebook"), $("#github"), $("#resume"), $("#linkedin"), $("#home")];

  var icon_img = [];

  for(var i = 0; i < 5; i++){
    icon_img[i] = icon[i].find("img");
  }

  var banner_icon_margin = (banner.width() - 5 * icon[0].width())/(icon_img.length*2);

  for(var i = 0; i < 5; i++){
    icon[i].css("margin-left", banner_icon_margin);
    icon[i].css("margin-right", banner_icon_margin);
    icon[i].find(".icon").css("left", 22.5);
    icon[i].find(".icon").css("top", 2);
  }

  for(var i = 0; i < 5; i++){
    icon_img[i].hover(
      function (){
        $(this).closest("div").find("p").stop().fadeIn("slow");
      },
      function (){
        $(this).closest("div").find("p").stop().fadeOut("slow");
      }
    );
  }
});
