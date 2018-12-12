$(document).ready(function() {

  $(".contactButton").click(function() {
    $("#contactContainer").css({
      "opacity": "0.8",
      "pointer-events": "all",
    });
    $("#contactMain").css({
      "opacity": "1",
      "pointer-events": "all",
      "margin-top": "75px",
    });
	$("body").addClass("noscroll");
  });  

  $(".contactClose").click(function() {
    $("#contactContainer").css({
      "opacity": "0",
      "pointer-events": "none",
    });
    $("#contactMain").css({
      "opacity": "0",
      "pointer-events": "none",
      "margin-top": "60px",
    });
	$("body").removeClass("noscroll");	
  });  
});
