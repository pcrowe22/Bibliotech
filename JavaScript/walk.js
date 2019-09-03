

//document.getElementById("picture").src = "https://www.dropbox.com/home/Cropped?preview=PSBCPeregrine.png" //"\JavaScript\fractal-1280080_1920.jpg";
//This is a HUGE error: CORB will not allow me to reference saved images from a site linked to a local host for security reasons.
//My solution: turn an old computer into a web server, download pictures onto there, and reference those, because they won't be paired with a local host.
//For now, make sure every image url is on the pages they could be displayed on.


var bookSources=[];
var bookNames=["blackDefault", "Peregrine", "EastOfEden", "Dune", "Minutes"];
bookSources[0]=document.getElementById("blackDefault").src;
bookSources[1]=document.getElementById("Peregrine").src;
bookSources[2]=document.getElementById("EastOfEden").src;
bookSources[3]=document.getElementById("Dune").src;
bookSources[4] = document.getElementById("Minutes").src;


var bookNameIndex=localStorage.getItem("bookIndex");

if (bookNameIndex>=0){
	document.getElementById("imageHolder").src=bookSources[bookNameIndex];
	document.getElementById(bookNames[bookNameIndex]).src="";
} else if (bookNameIndex=="undefined"){
	document.getElementById("imageHolder").src = "";
}

function grabBook(book){
	for (var i=0; i<bookNames.length; i++){
		document.getElementById(bookNames[i]).src = bookSources[i];
		if (book == bookNames[i]){
			document.getElementById(book).src.innerHTML=document.getElementById("imageHolder").src;
			document.getElementById("imageHolder").src.innerHTML=bookSources[i];
			//for hard-emptying an image source: document.getElementById(book).src= "";
			localStorage.setItem("bookIndex", i);
			document.getElementById("imageHolder").src = bookSources[i];
			
			//following code is supposed to make big ugly black png be invisible but clickable
			if (i==0){
				document.getElementById(book).setAttribute("opacity", 0);
				alert("set Opacity 0");
				window.location.reload();
			} else {
				document.getElementById(book).setAttribute("opacity", 100);
				alert("set Opacity 100");
				window.location.reload();
			}
		}
	}
}
function checkBook(place){
	


function shelfChoice(holder){
	alert("shelfChoice");
	if (document.getElementById(holder).src.innerHTML == document.getElementById("blackDefault").src.innerHTML){
		placeBook(holder);
	} else {
		takeBook(holder);
	}
}
function placeBook(holder){
	alert("placeBook");
	bdefault = document.getElementById("blackDefault").src;
	book = document.getElementById("imageHolder").src;
	document.getElementById(holder).src.innerHTML = book;
	document.getElementById("imageHolder").src.innerHTML = bdefault;
}
function takeBook(holder){
	alert("takeBook");
	bdefault = document.getElementById("blackDefault").src;
	book = document.getElementById(holder).src;
	document.getElementById("imageHolder").src.innerHTML = book;
	document.getElementById(holder).src.innerHTML = bdefault;
}
function swapBook(ID){
	newBook = document.getElementById(ID).src.innerHTML;
	holdingBook = document.getElementById("imageHolder").src.innerHTML;
	document.getElementById(ID).src.innerHTML = holdingBook;
	document.getElementById("imageHolder").src.innerHTML = newBook;
}

