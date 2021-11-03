//Zmiana koloru tła naglowka
var bar = document.getElementById("headerStyle");
bar.style.backgroundColor = "#0074D9";
bar.style.backgroundImage = "";		

//Utworzenie elementu do wyswietlania czasu
var container = document.getElementById("divP1");
var p1 = document.createElement("p");
p1.innerHTML = "Czas";
p1.style.margin = "-25px 0px 40px 0px";
p1.style.font = "bold 20px arial";
p1.style.lineHeight = "1.5";
container.insertBefore(p1, container.firstChild);

setInterval(showTime, 1000);

//Przypisanie do przycisku wydarzenia
const btn = document.querySelector(".bttn1");
btn.addEventListener("click", () => {
	if (!document.getElementById('newTab'))
	{	
		"use strict"
		//Zmiana koloru przycisku i napisu.
		btn.style.backgroundColor = "red";
		btn.style.borderColor = "black";
		btn.style.color = "white";
		btn.innerHTML = "Utworzono zakładkę!";
	
		//Utworzenie nowej zakladki na gornym pasku
		var node = document.createElement("LI");                
		var link1 = document.createElement("a");
		var att = document.createAttribute("href");
		att.value = "newPage.html";
		link1.setAttributeNode(att);
		link1.className = "nav-link";
		node.className = "nav-item";
		var textnode = document.createTextNode("Zakładka");         
		link1.appendChild(textnode); 
		node.appendChild(link1);
		node.id = "newTab";
		document.getElementById("zakladki").appendChild(node);
	}
});

function setDate(){
	document.getElementById("data").innerHTML = "Data ostatniej modyfikacji: " + document.lastModified;
}


function _getMonths(num){
	var miesiace = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Siepień','Wrzesień','Październik','Listopad','Grudzień'];
	var mies = miesiace[num];
	return mies;
}
function _getTime()
{
	var date = new Date();
	this.time = date.toLocaleTimeString();
	this.year = date.getUTCFullYear();
	this.day = date.getUTCDate();
	this.month = date.getUTCMonth();
	this.currentTime = this.time + ' <br>' +  this.day + ' '  + _getMonths(this.month) +  ' ' + this.year;
	return this.currentTime;
}
function showTime()
{
	p1.innerHTML = _getTime();
}

