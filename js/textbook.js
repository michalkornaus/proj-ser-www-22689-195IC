//funkcja podmieniająca paragraf diva
function replaceElement(){
	var div = document.getElementById("divReplace");
	var oldP = document.getElementById("replaceP");
	var _p = document.createElement("p");
	_p.className = "textCenter";
	_p.style.font = "bold";
	_p.innerHTML = "ALGORYTMY";
	_p.id = "newP";
	div.replaceChild(_p, oldP);
}
//funkcja dodająca tekst ALGORYTMY na początku paragrafu 
function addText(){
	var _p = document.getElementById("newP");
	_p.insertAdjacentHTML("afterbegin", "<span style='color:red'>ALGORYTMY </span>");
}