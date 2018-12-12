$(document).ready(function() {
	var scroll_pos = 0;
	$(document).scroll(function() {
		scroll_pos = $(this).scrollTop();
		if (scroll_pos > 1000) {
			$("a.back-to-top").css({
				"bottom": "40px",
				
			});
			$(".contactButton").click(function() {
				$("a.back-to-top").css({
					"bottom": "-80px"
				})
			});
			$(".contactClose").click(function() {
				$("a.back-to-top").css({
					"bottom": "40px",
				})
			});
		} else {
			$("a.back-to-top").css({
				"bottom": "-80px",
				
			});
			$(".contactButton").click(function() {
				$("a.back-to-top").css({
					"bottom": "-80px"
				})
			});
			$(".contactClose").click(function() {
				$("a.back-to-top").css({
					"bottom": "-80px"
				})
			});
		}
	});
	$("a.back-to-top").click(function() {
		$("html, body").animate({
			scrollTop: 0
		},
		400);
		return false;
	});
});