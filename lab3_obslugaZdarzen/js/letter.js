function addElements(){
	//6 - resize
	window.addEventListener("resize", randomBackground);
	//7 - click
	document.getElementById("button").addEventListener("click", sendLetter);
	
	//8 - keyup
	window.addEventListener("keyup", function(event){
		const p = document.getElementById("keyP");
		p.insertAdjacentHTML("afterbegin", "Wcisnąłeś klawisz: " + event.key + "<br>");
	}, true);
	
	//9 - wheel
	var x = 0;
	window.addEventListener("wheel", function(){
		var h = document.getElementById("nagl");
		x = x + 1;
		h.innerHTML = x;
	});
	
}
function newWindow() {
	//10 - keydown
  myWindow = window.open("", "myWindow", "width=250, height=200");
  myWindow.document.write("<p>Interaktywne okienko<br>Możesz się poruszać przy pomocy klawiszy WSAD oraz strzałek.</p>");
  myWindow.addEventListener("keydown", function(event) {
  if (event.defaultPrevented) {
    return;
  }

  switch(event.code) {
    case "KeyS":
    case "ArrowDown":
      myWindow.moveBy(0, 50);
	  myWindow.focus();
      break;
    case "KeyW":
    case "ArrowUp":
      myWindow.moveBy(0, -50);
	  myWindow.focus();
      break;
    case "KeyA":
    case "ArrowLeft":
      myWindow.moveBy(-50, 0);
	  myWindow.focus();
      break;
    case "KeyD":
    case "ArrowRight":
      myWindow.moveBy(50, 0);
	  myWindow.focus();
      break;
  }
  event.preventDefault();
}, true);
}

function randomBackground(){
	document.getElementById("header").style.backgroundImage = "";
    document.getElementById("header").style.backgroundColor = getRandomColor();
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
//funkcja ukrywająca list i usuwająca zdarzenie dla okna
function sendLetter(){
	document.getElementById("letter").style.display = "none"; 
	document.getElementById("nagl").innerHTML = "Wysłano list!"; 
	window.removeEventListener("resize", randomBackground);
}
