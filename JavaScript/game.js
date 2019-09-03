$(document).ready(function(){
	$("#logo").fadeIn(3000);
	$("#logo").delay(1000).fadeOut(2000);
	$("#gtext1").delay(6000).fadeIn(1000);
	$(".checkChoice").delay(6500).fadeIn(1000);
});
$("#spanish").one("click", function(){
	$("#notSupported").fadeIn(1500);
	$("#notSupported").delay(3000).fadeOut(1000);
});
$("#english").one("click", function(){
	$(".checkChoice").fadeOut(1000);
	$("#gtext1").delay(1000).fadeOut(1000);
	$("#manta").delay(3500).fadeIn(1000);
	$(".gameText1").delay(3000).fadeIn(1000);
	$("#brightSlide").delay(3000).fadeIn(1000);
});

var bright = document.getElementById("brightSlide").value;
function changeBright(){
	bright = document.getElementById("brightSlide").value;
	var brightPercent = bright/100;
	document.getElementById("manta").brightness = brightPercent;
}