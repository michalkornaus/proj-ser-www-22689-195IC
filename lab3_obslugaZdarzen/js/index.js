function addElements(){
	var _p = document.createElement("p");
	_p.id = "time";
    _p.innerHTML = _getTime();
	//1 - mouseenter
	_p.addEventListener("mouseenter", function(){
		this.innerHTML = _getTime();
	});
	
	document.getElementById("timeDiv").appendChild(_p);
	
	//2 - mousemove
	document.getElementById("movingDiv").addEventListener("mousemove", function(event) {
		updateMove(event);
	});
	
	//3 - dragstart, dragover, drop
	document.addEventListener("dragstart", function(event) {
	  event.dataTransfer.setData("Text", event.target.id);
	});
	document.addEventListener("dragover", function(event) {
	  event.preventDefault();
	});
	document.addEventListener("drop", function(event) {
	  event.preventDefault();
	  if ( event.target.className == "droptarget" ) {
		var data = event.dataTransfer.getData("Text");
		event.target.appendChild(document.getElementById(data));
	  }
	});
	//4, 5 - mousedown, mouseleave
	_p2 = document.getElementById("intP");
	_p2.addEventListener("mousedown", function() {
	  _p2.innerHTML = "Kliknąłeś myszką!";
	});
	_p2.addEventListener("mouseleave", function() {
	  _p2.innerHTML = "Opuściłeś obszar!";
	});
}

function updateMove(e){
	var x = e.clientX;
	var y = e.clientY;
	var coords = "x: " + x + ", y: " + y;
	document.getElementById("movingDiv").innerHTML = coords;
}
//funkcja która zwraca stringa z polską nazwą miesiąca
function _getMonths(num){
	var miesiace = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Siepień','Wrzesień','Październik','Listopad','Grudzień'];
	var mies = miesiace[num];
	return mies;
}
//funkcja znajdująca obecną datę z paru atrybutów zmiennej 'date' i funkcji _getMonths i tworzy z tego jeden napis który zwraca
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

