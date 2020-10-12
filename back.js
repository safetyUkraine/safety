
$(document).ready(function(){
    $("#menu").click(function(){
      $("#panel").animate({left: "+=100vw"}, 500, function(){
        $("header, main").css("visibility", "hidden"); 
        $("body").css("background-color", "white");
        $("#panel").animate({left: "+=100vw"}, 500, function(){
        window.history.back();
        /* window.location.href = "../index.html"; */
        })
      })
    })
  })
