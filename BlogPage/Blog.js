$(document).ready(function () {
  "Use Strict";

  //Place today's date
  var today = new Date();
  var today_year = today.getFullYear();
  var today_month = today.getMonth();
  var today_day = today.getDate();
  var today_weekday = today.getDay();
  var today_hours = today.getHours();
  var today_minutes = today.getMinutes();
  var today_seconds = today.getSeconds();
  var month_ref = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var weekday_ref = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var date_div = $(".date");

  date_div.append('<p class="date_day">' + month_ref[today_month] + ' ' + today_day + ' ' + today_year + '</p>');

  date_div.append('<p class="date_time">' + today_hours + ':' + today_minutes + ':' + today_seconds + '</p>');

  console.log(today);

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
        $(this).closest("div").find("p").fadeIn("slow");
      },
      function (){
        $(this).closest("div").find("p").fadeOut("slow");
      }
    );
  }
});
