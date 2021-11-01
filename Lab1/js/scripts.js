/*!
* Start Bootstrap - Full Width Pics v5.0.4 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function setDate(){
	document.getElementById("data").innerHTML = "Data ostatniej modyfikacji: " + document.lastModified;
}

function sendLetter(){
	document.getElementById("letter").style.display = "none"; 
	document.getElementById("nagl").innerHTML = "Wysłano list!"; 
	setTimeout(function(){
		alert("Wysłanie listu powiodło się");
	}, 1000);
}
