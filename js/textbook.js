function replaceElement(){
	var div = document.getElementById("divReplace");
	var oldP = document.getElementById("replaceP");
	var _p = document.createElement("p");
	_p.className = "textCenter";
	_p.style.font = "bold";
	_p.innerHTML = "ALGORYTMY ALGORYTMY ALGORYTMY ALGORYTMY";
	div.replaceChild(_p, oldP);
}