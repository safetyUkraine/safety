/*$(document).ready(function() {
  $("header").css("visibility", "visible"); 
  $("main").css("visibility", "visible");
  })
  
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
  } */


$(document).ready(function(){
$('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 1200);
    $("#menu-checkbox").prop("checked", false); 
    return false;
  })
})


$("p.crimes_cl").click(function(){
  var file_name = "crimes/"+$(this).data('value')+".html";
  $("#panel").animate({left: "-=100vw"}, 500, function(){
   $("header").css("visibility", "hidden"); 
    $("#ukraine, #home, main").css("visibility", "hidden");
    $("#panel").animate({left: "-=100vw"}, 500, function(){
      window.location.href = file_name;
    })
  })
})

$("p.threats_cl").click(function(){
  var file_name = "threats/"+$(this).data('value')+".html";
  $("#panel").animate({left: "-=100vw"}, 500, function(){
    $("header").css("visibility", "hidden"); 
    $("main").css("visibility", "hidden");
    $("#panel").animate({left: "-=100vw"}, 500, function(){
      window.location.href = file_name;
    })
  })
})

$("p.eap_cl").click(function(){
  var file_name = "eap/"+$(this).data('value')+".html";
  $("#panel_eap").animate({left: "-=100vw"}, 500, function(){
    $("header").css("visibility", "hidden"); 
    $("main").css("visibility", "hidden");
    $("#panel_eap").animate({left: "-=100vw"}, 500, function(){
      window.location.href = file_name;
    })
  })
})