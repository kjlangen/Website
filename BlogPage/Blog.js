$(document).ready(function () {
  "Use Strict";

  var banner = $(".banner_wrapper");
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
