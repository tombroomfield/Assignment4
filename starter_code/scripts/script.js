
$(document).ready(function(){

	$(".readmore").click(function (event) {
		event.preventDefault();
		$("#show-this-on-click").slideDown();
		$(".readmore").hide();
		$(".readless").show(); 
	});

	$(".readless").click(function (event) {
		event.preventDefault();
		$("#show-this-on-click").slideUp();
		$(".readless").hide();
		$(".readmore").show(); 
	});

	$(".learnmore").click(function (event) {
		event.preventDefault();
		$("#learnmoretext").slideDown();
		$(".learnmore").hide(); 
	});

});