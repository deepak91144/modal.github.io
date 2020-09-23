jQuery(document).ready(function ($) {
	$(".btn").click(function () {
		$(".container").fadeIn();
	});
	$(".container .modal button.close").click(function () {
		$(".container").fadeOut();
	});
});
