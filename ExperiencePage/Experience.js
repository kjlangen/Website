$(document).ready(function () {
  "Use Strict";

  //Center Timeline
  /*var timeline_container = ($(".timeline_wrapper").width() - $(".timeline").width())/2;
  var timeline_left_margin = timeline_container - $(".logo_flow").width();
  var timeline_right_margin = timeline_container - $(".description_flow").width();
  window.console.log($(".logo_flow").width());
  window.console.log($(".description_flow").width());

  $(".logo_flow").css("margin-left", timeline_left_margin);
  $(".timeline").css("margin-right", timeline_right_margin);*/

  //Center Timeline
  var timechunk_content = $(".timechunk_content");
  var timeline_wrapper = $(".timeline_wrapper");
  var num_timeline_pieces = $(".quarter").length;

  timeline_wrapper.width(num_timeline_pieces * 204);
  timechunk_content.height($(document).height() * 3/5);

  //Highlight Timeline Segment
  var quarters = [$("#q1"), $("#q2"), $("#q3"), $("#q4"), $("#q5")];
  var timeline = $(".timeline");

  for(i = 0; i < 5; i++){
    quarters[i].click(
      function (){
        $(".red_select").removeClass("red_select");
        $(this).addClass("red_select");
      }
    );
  }

  //Center logo
  var extreme_icon = $(".extreme_icon");

  extreme_icon.css("margin-top", (timechunk_content.height() - extreme_icon.height())/2 - 30);
  extreme_icon.css("margin-left", (timechunk_content.width()/2 - extreme_icon.width())/2);

  //Equally space the banner items
  var banner = $(".banner_wrapper");
  var screen_width = $(window).width() - banner.width();
  var icon = [$("#facebook"), $("#github"), $("#resume"), $("#linkedin"), $("#home")];

  var icon_img = [];

  for(i = 0; i < 5; i++){
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

  //On Window Resize
  $(window).resize(function(){
    timechunk_content.height($(document).height() * 3/5);
    timechunk_content.children(".description").width(timechunk_content.width()/2);
  });

});
