$(document).ready(function() {
	$(".language-current").click(function() {
		$(".language-menu").css({
			"height": "125px",
		})
		$(".language-select").css({
			"opacity": "1",
			"pointer-events": "all",
		})
	});	
});