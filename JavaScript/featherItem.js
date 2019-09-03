
var feather;


function collectFeather(){
	localStorage.setItem('feather', 1);
}
function placeFeather(){
	localStorage.setItem('feather', 0);
}

function checkFeather(){
	var feather1=localStorage.getItem('feather');
	if (feather1==0){
		window.location.href="BarthPondItem1Placed.html";
	} else {
		window.location.href="BarthPondItem1Gotten.html";
	}
}
		