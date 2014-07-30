$(document).ready(function () {
  "Use Strict";

  //Center Timeline
  var timechunk_content = $(".timechunk_content");
  var timeline_wrapper = $(".timeline_wrapper");
  var num_timeline_pieces = $(".quarter").length;

  timeline_wrapper.width(num_timeline_pieces * 204);
  timechunk_content.height($(document).height() * 3/5);

  //Switch switch_visible
  function switch_visible(new_quarter, old_quarter){
    var  new_content = $("#" + new_quarter + "content");
    var old_content = $("#" + old_quarter + "content");
    new_content.removeClass("hide");
    old_content.addClass("hide");

    var this_image = new_content.find(".image");
    this_image.css("margin-top", (timechunk_content.height() - this_image.height())/2 - 30);
    this_image.css("margin-left", (timechunk_content.width()/2 - this_image.width())/2);
  }

  //Highlight Timeline Segment
  var quarters = [$("#s2013"), $("#f2013"), $("#w2013"), $("#sp2014"), $("#s2014")];
  var timeline = $(".timeline");

  for(i = 0; i < 5; i++){
    quarters[i].click(
      function (){
        switch_visible($(this).attr("id"),$(".red_select").attr("id"));
        $(".red_select").removeClass("red_select");
        $(this).addClass("red_select");
      }
    );
  }

  switch_visible(quarters[2].attr("id"),"");

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
        $(this).closest("div").find("p").stop(true, true).fadeIn("slow");
      },
      function (){
        $(this).closest("div").find("p").stop(true, true).fadeOut("slow");
      }
    );
  }

  //On Window Resize
  $(window).resize(function(){
    timechunk_content.height($(document).height() * 3/5);
    timechunk_content.children(".description").width(timechunk_content.width()/2);
  });

});
