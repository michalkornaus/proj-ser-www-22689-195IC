//usuwamy wybrane teksty z listu po nazwie klasy
"use strict";
let texts = document.getElementsByClassName("textToDelete");
var _length = texts.length;
for (var i = 0; i < _length; i++) {
	texts[0].remove();
} 

//ustawiamy kolor tła 
document.body.style.backgroundColor = "#34568B"; 

//zmieniamy kolor nagłówka
document.getElementById("nagl").style.color = "white";

var _div = document.getElementById("divAdd");
var _p = document.createElement("p");
_p.className = "textCenter";
_p.innerHTML = "Doctype: " + document.doctype.name + "<br>Tytuł: " + document.title;
_div.appendChild(_p);

var _p2 = document.getElementById("p2");
_p2.style.border = "thick solid #04DFDD"; 
_p2.style.padding = "10px 5px 10px 5px";

//funkcja dodająca paragraf w headerze i uruchamia funkcje zmieniajaca kolor tla co 5 sekund
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
