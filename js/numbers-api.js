$(document).ready(function () {
    "Use Strict";

    //Global Variables
    var rand = Math.floor((Math.random() * 100) + 1);
    var number_fact = $("#number-fact");
    var icon_img = $(".banner-item").map(function() { return $(this); });
    console.log(icon_img);
    var inner_text = [$("#workexp-link"),$("#projects-link"),$("#blog-link")];
    var inner_lines = [$("#inner-right"),$("#inner-left"),$("#vertical")];
    var fill = [$("#exp-fill"),$("#proj-fill"),$("#blog-fill")];
    var timechunk_content = $(".timechunk-content");
    var timeline_wrapper = $(".timeline-wrapper");
    var num_timeline_pieces = $(".quarter").length;
    var quarters = [$("#s2013"), $("#f2013"), $("#w2013"), $("#sp2014"), $("#s2014")];
    var timeline = $(".timeline");

    //Declare Functions
    function get_num_fact(){
        $.get("http://numbersapi.com/" + rand + "/math",
            function (data){
                if(data != ""){
                    number_fact.text(data);
                }
                else{
                    number_fact.text("Sorry, looks like Numbers API isn't working right now. :(");
                }
                var quote_height = number_fact.height();
                var hexagon_height = $(".right-hex-wrapper").height();
                var credit_height = $("#credit").height();
                var text_distance_down = (hexagon_height - quote_height - credit_height)/2;
                $("#number-fact").css("top", text_distance_down);
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
                fill[j].fadeIn(2000);
            },
            function(){
                fill[j].stop().fadeOut(0);
                inner_lines[second].stop().fadeToggle("slow",false);
                inner_text[first].stop().fadeToggle("slow",false);
                inner_text[second].stop().fadeToggle("slow",false);
                inner_lines[first].removeClass("forward" + j);
                inner_lines[j].removeClass("forward" + j);
            }
            );
    }

    function switch_visible(new_quarter, old_quarter){
        var  new_content = $("#" + new_quarter + "content");
        var old_content = $("#" + old_quarter + "content");
        new_content.removeClass("hide");
        old_content.addClass("hide");

        var this_image = new_content.find(".image");
        this_image.css("margin-top", (timechunk_content.height() - this_image.height())/2 - 30);
        this_image.css("margin-left", (timechunk_content.width()/2 - this_image.width())/2);
    }

    //Get and display number fact from Numbers API
    get_num_fact();


    for(var i = 0; i < icon_img.length; i++){
        icon_img[i].find("img").hover(
            function (){
                $(this).closest("div").find("p").stop(true, true).fadeIn("slow");
            },
            function (){
                $(this).closest("div").find("p").stop(true, true).fadeOut("slow");
            }
            );
    }

    //On Hover Animate Center Hex
    for(var i = 0; i < 3; i++){
        animate_hexagon(i);
    }  

    /*//Highlight Timeline Segment  
    for(i = 0; i < 5; i++){
    quarters[i].click(
    function (){
    switch_visible($(this).attr("id"),$(".red-select").attr("id"));
    $(".red-select").removeClass("red-select");
    $(this).addClass("red-select");
    }
    );
    }

    //Switch visible part of the timeline
    switch_visible(quarters[2].attr("id"),"");*/
});