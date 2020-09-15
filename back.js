
$(document).ready(function(){
    $("#menu").click(function(){
      $("#panel").animate({left: "+=100vw"}, 500, function(){
        $("header").css("visibility", "hidden"); 
        $("main").css("visibility", "hidden");
        $("#panel").animate({left: "+=100vw"}, 500, function(){
          window.location.href = "../index.html";
        })
      })
    })
  })
