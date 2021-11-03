function BGColor(){
	var bar = document.getElementById("headerStyle");
	var p1 = document.createElement("p");
	p1.innerHTML = "Nowy losowy kolor co 5 sekund!";
	p1.style.marginTop = "35px";
	p1.style.font = "bold 25px arial";
	bar.appendChild(p1);
	bar.style.backgroundImage = "";
	bar.style.backgroundColor = getRandomColor();
	setInterval(changeBGColor, 5000);
}
function changeBGColor(){
	var bar = document.getElementById("headerStyle");
	bar.style.backgroundColor = getRandomColor();
}
//Funkcja generuje losowy kolor poprzez losowe wygenerowanie wszystkich 6 znaków 
function getRandomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function sendLetter(){
	document.getElementById("letter").style.display = "none"; 
	document.getElementById("nagl").innerHTML = "Wysłano list!"; 
	setTimeout(function(){
		alert("Wysłanie listu powiodło się");
	}, 1000);
}
