$(function() {
	$('.carousel').carousel({
		
	})

});
var test = true;
function toggleClick() {
	var toggleMenu = $(".top-line nav ul");
	if (test) {
		toggleMenu.css("top", "-50px");
		return test = false;
	}
	if (!test) {
		toggleMenu.css("top", "-999px");
		return test = true;
	}
}
function hoverServiceImage(n) {
	var image = $("#ServiceImage" + n);
	image.attr("src", "img/Services/hoverIcon" + n + ".svg");
}
function backServiceImage(n) {
	var image = $("#ServiceImage" + n);
	image.attr("src", "img/Services/icon" + n + ".svg");
}