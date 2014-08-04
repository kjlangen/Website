$(document).ready(function () {
  "Use Strict";

  //Setup title graphics
  var graphics = [$("#server_graphic"), $("#web_graphic"), $("#gol_graphic")];
  var horiz;

  for(var k = 0; k < graphics.length; k++){
    horiz = 2 * graphics[k].find(".leftbrace").width() + graphics[k].find(".project_title").width() + 15;
    graphics[k].width(horiz);
  }

  //Equally space the banner items
  var icon = [$("#facebook"), $("#github"), $("#resume"), $("#linkedin"), $("#home")];

  var icon_img = [];

  for(var i = 0; i < 5; i++){
    icon_img[i] = icon[i].find("img");
  }

  for(var i = 0; i < 5; i++){
    icon_img[i].hover(
      function (){
        $(this).closest("div").find("p").stop(true, true).fadeIn("slow");
      },
      function (){
        $(this).closest("div").find("p").stop(true, true).fadeOut("slow");
      }
    );
  }
});
