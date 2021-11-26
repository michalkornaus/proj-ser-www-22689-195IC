//podstawowa zmienna canvas oraz zmienne pozwalające na liczenie czasu gry bez używania setInterval lub timeout
var canvas = null;
var gameTime = 0, lastFrameTime = 0;
var currentSecond = 0;

//zmienne offset przechowują dystans w pixelach krańców canvasu do rzeczywistego pola gry
var offsetX = 0, offsetY = 0;

/*zmienna grid przechowuje wszystkie obiekty pól w jednowymiarowej tablicy 

zbiór wszystkich pól może wydawać się być macierzą lecz nie trzeba trudzić się w dwuwymiarowe tablice 
i można skrócić to do jednowymiarowej tablicy przy pomocy mnożnika wiersza lub kolumny dla ułatwienia indeksowania 

dla każdej iteracji przez grid stosuje poniższy zapis ; zmienna idx przechodzi przez wszystkie elementy dzięki zapisowi 'py * cDiff.width'

dla przykładowej szerokości i wysokości planszy 10x10 mamy 100 elementów - w macierzy oraz w tej tablicy jest ich tyle samo
różnica jest w tym, że dzięki pomnożeniu jednej składowej koordynatów 'py' przez szerokość 10 automatycznie indeksujemy w inkrementach 10 od 10 do 100, 
resztę miejsc wypełnia druga składowa 'px'

		var idx = ((py * cDiff.width) + px);	
		if(grid[idx]...)
			...
*/
var grid = [];

//obiekt stanu myszki (pozycji kursora) ; przy użyciu elementu canvas nie możemy wykrywać zdarzeń na utworzonych elementach filText i fillRect
//które tworzą grę, więc musimy obejść to poprzez zapisywanie pozycji kursora i sprawdzanie warunkami czy znajdujemy się nad lub pod danym polem i odpowiednio to obsługiwać
var mouseState = {
	x : 0,
	y : 0,
	click : null
};
//obiekt stanu gry - potrzebny do wyświetlania menu, zmiany poziomu ciężkości oraz obsługiwania logiki wygrywania/przegrywania
//dodatkowo przechowuje rozmiaru jednego kafelka, pola gry
var gameState = {
	difficulty : 'easy',
	screen : 'menu',
	newBest	: false,
	timeTaken : 0,
	tileW : 20,
	tileH : 20
};
//zapisana kolekcja poziomów trudności w łatwej do modyfikacji formie - zawiera nazwę, rozmiar, ilość min oraz zapisany najlepszy czas (narazie pusty)
var difficulties = {
	easy: {
		name		: "Łatwy",
		width		: 10,
		height		: 10,
		mines		: 10,
		bestTime	: 0,
		menuBox		: [0,0]
	},
	medium: {
		name		: "Normalny",
		width		: 12,
		height		: 12,
		mines		: 20,
		bestTime	: 0,
		menuBox		: [0,0]
	},
	hard: {
		name		: "Trudny",
		width		: 15,
		height		: 15,
		mines		: 50,
		bestTime	: 0,
		menuBox		: [0,0]
	}
};
//Kolory pól w RGB zapisane w tablicy w celu łatwej zmiany koloru tekstu zależnego od ilości min
var colors = ['#012eff','#72b820','#f90501','#00056b','#5e0520','#77a3ca','#04080c','#777778'];
//Główny obiekt gry - Tile (pole, pojedynczy kafelek planszy) zawiera koordynaty, oraz informacje logiczne czy na tym polu znajduje się mina, flaga oraz poziom zagrożenia
function Tile(x, y)
{
	this.x = x;
	this.y = y;
	this.hasMine = false;
	this.danger = 0;
	this.currentState = 'hidden';
}
//Pod zapisaną logiką obiektu Tile mamy zapisane wszystkie prototypy dziedziczone z głównego obiektu, które rozszerzają obiekt Tile o potrzebne metody
//Poniższa funkcja kalkuluje zagrożenie, dla danego pola sprawdzamy wszystkie pola naokoło i sumujemy ilość wszystkich min, które się tam znajdują.
Tile.prototype.calcDanger = function()
{
	var cDiff = difficulties[gameState.difficulty];
	//dwie zagnieżdzone pętle które kalkulują obszar 3x3 względem wybranego pola i znajdują na tym obszarze wszystkie miny.
	for(var py = this.y - 1; py <= this.y + 1; py++)
	{
		for(var px = this.x - 1; px <= this.x + 1; px++)
		{
			if(px==this.x && py==this.y) { continue; }
			
			if(px < 0 || py < 0 ||
				px >= cDiff.width ||
				py >= cDiff.height)
			{
				continue;
			}
			
			if(grid[((py*cDiff.width)+px)].hasMine)
			{
				this.danger++;
			}
		}
	} 
};

Tile.prototype.flag = function()
{
	if(this.currentState=='hidden') { this.currentState = 'flagged'; }
	else if(this.currentState=='flagged') { this.currentState = 'hidden'; }
};
//metoda zawierająca logikę klikania danego pola - jeżeli pole jest już odkryte nie rób nic, jeżeli zakryte to jeśli trafiliśmy w minę to przegraliśmy
//jeśli wokół danego pola zagrożenie jest większe niż 0 czyli w pobliskim obszarze jest jakaś mina to zmieniamy stan na odkryty.
Tile.prototype.click = function()
{
	if(this.currentState!='hidden') { return; }
	
	if(this.hasMine) { gameOver(); }
	else if(this.danger>0) { this.currentState = 'visible'; }
	else
	{
		//w momencie kiedy klikneliśmy na pole bez żadnego zagrożenia wokół to odkrywamy to pole,
		//lecz dodatkowo odkrywamy wszystkie puste pobliskie pola przy użyciu funckji revealNeighbours()
		this.currentState = 'visible';
		this.revealNeighbours();
	}
	//po każdym kliknięciu sprawdzamy stan całego pola aby odpowiednio pokazać czy wygraliśmy w przypadku znalezienia wszystkich min
	checkState();
};
//rekurencyjna metoda, która kaskadowo odkrywa pola bez żadnego zagrożenia
//w momencie kiedy klikneliśmy na puste pole wywołuje się ta funkcja i sprawdza obszar 3x3 wokół pola i sprawdza czy te pola są puste, 
//jeżeli jakieś pule jest puste to dla tego nowego pola również wywołujemy tę funkcję - aż skończą się wszystkie puste pola w jednym obszarze
Tile.prototype.revealNeighbours = function()
{
	var cDiff = difficulties[gameState.difficulty];
	
	for(var py = this.y - 1; py <= this.y + 1; py++)
	{
		for(var px = this.x - 1; px <= this.x + 1; px++)
		{
			if(px==this.x && py==this.y) { continue; }
			
			if(px < 0 || py < 0 ||
				px >= cDiff.width ||
				py >= cDiff.height)
			{
				continue;
			}
			var idx = ((py * cDiff.width) + px);
			
			if(grid[idx].currentState=='hidden')
			{
				grid[idx].currentState = 'visible';
				
				if(grid[idx].danger==0)
				{
					grid[idx].revealNeighbours();
				}
			}
		}
	}
};
//metoda która sprawdza całą planszę, po każdym kliknięciu w pole niebędące miną - sprawdza czy wygraliśmy grę 
function checkState()
{
	for(var i in grid)
	{
		//jeżeli znajduje się gdzieś jakakolwiek zakryta mina lecz nie zaznaczona flagą to nie możemy jeszcze wygrać
		if(grid[i].hasMine==false && grid[i].currentState!='visible')
		{
			return;
		}
	}
	//jeżeli wygraliśmy to nadpisujemy najlepszy czas jeżeli jest lepszy oraz zmieniamy stan gry na zwycięstwo
	gameState.timeTaken = gameTime;
	var cDiff = difficulties[gameState.difficulty];
	
	if(cDiff.bestTime==0 ||
		gameTime < cDiff.bestTime)
	{
		gameState.newBest = true;
		cDiff.bestTime = gameTime;
	}
	
	gameState.screen = 'won';
}
//prosta metoda która zmienia stan gry na przegraną
function gameOver()
{
	gameState.screen = 'lost';
}
//funkcja rozpoczynająca grę biorąc jako parametr wybrany poziom trudności
function startLevel(diff)
{
	//ustawiamy odpowiednie parametry startowe mówiące, że rozpoczeliśmy nową rozgrywkę
	gameState.newBest = false;
	gameState.timeTaken	= 0;
	gameState.difficulty = diff;
	gameState.screen = 'playing';
	
	//zerujemy wszystkie liczniki czasu
	gameTime = 0;
	lastFrameTime = 0;
	
	grid.length = 0;
	
	//tworzymy nową lokalną zmienną która jest kopią wybranego poziomu trudności - utworzona w celu łatwiejszego pobierania danych
	var cDiff = difficulties[diff];
	
	//obliczamy dystans krawędzi planszy gry od krańców canvasu - wartość ta jest potrzebna do poprawnego wyznaczania miejsca kliknięcia kursoru na polach
	offsetX = Math.floor((document.getElementById('game').width -
			(cDiff.width * gameState.tileW)) / 2);
	//wartość ta jest obliczana biorąc szerokość/wysokość elementu canvas, następne odejmuje się od tego cały obszar gry (obszar siatki wszystkich pól) 
	//dzielimy wtedy tę wartość na dwa i dostaniemy wtedy długość od krawędzi całego obszaru do krawędzi gridu gry (działa to tylko wtedy kiedy grid gry jest wycentrowany)
	offsetY = Math.floor((document.getElementById('game').height -
			(cDiff.height * gameState.tileH)) / 2);
			
	//wypełniamy zmienną grid nowymi polami (narazie wszystkie puste, bez min)
	for(var py = 0; py < cDiff.height; py++)
	{
		for(var px = 0; px < cDiff.width; px++)
		{
			grid.push(new Tile(px, py));
		}
	}
	
	var minesPlaced = 0;
	//w poniższej pętli wypełniamy planszę minami w losowych miejscach - pętla powtarza się aż wypełnimy planszę taką ilością jaką mamy podaną w poziomie trudności
	while(minesPlaced < cDiff.mines)
	{
		var idx = Math.floor(Math.random() * grid.length);
		//jeżeli dane pole zawiera już minę to skipujemy dalsze działanie pętli i szukamy następnego pola
		if(grid[idx].hasMine) { continue; }
		
		grid[idx].hasMine = true;
		minesPlaced++;
	}
	// dla każdego pola na planszy liczymy poziom zagrożenia
	for(var i in grid) { grid[i].calcDanger(); }
}
//funkcja do odczytywania i aktualizowania ruchów i kliknięć myszki
function updateGame()
{
	//segmentujemy zdarzenia na podstawie atrybutu 'screen'
	if(gameState.screen=='menu')
	{
		if(mouseState.click!=null)
		{
			for(var i in difficulties)
			{
				//odczytujemy pozycję wertykalną pozycji myszki i jeżeli po kliknięciu kursor znajduje się 
				//między którymikolwiek z poziomów trudności to rozpoczynamy grę w wybranym poziomie 
				if(mouseState.y >= difficulties[i].menuBox[0] &&
					mouseState.y <= difficulties[i].menuBox[1])
					{
					startLevel(i);
					break;
					}
			}
			mouseState.click = null;
		}
	}
	//jeżeli wygraliśmy/przegralismy to po kliknięciu wracamy do menu
	else if(gameState.screen=='won' || gameState.screen=='lost')
	{
		if(mouseState.click!=null)
		{
			gameState.screen = 'menu';
			mouseState.click = null;
		}
	}
	//jeżeli ani nie wygraliśmy/przegraliśmy ani nie jestesmy w menu to oznacza że prowadzimy teraz rozgrywkę
	else
	{
		//sprawdzamy czy stan myszki nie jest równy null (czy użytkownik kliknął lub ruszył myszką)
		if(mouseState.click!=null)
		{
			var cDiff = difficulties[gameState.difficulty];
			//sprawdzamy czy koordynaty położenia myszki w momencie kliknięcia są w ramach obszaru pola gry
			if(mouseState.click[0]>=offsetX &&
				mouseState.click[1]>=offsetY &&
				mouseState.click[0]<(offsetX + (cDiff.width * gameState.tileW)) &&
				mouseState.click[1]<(offsetY + (cDiff.height * gameState.tileH)))
			{
				//jeżeli koordynaty myszki są wewnątrz pola gry możemy obliczyć nad jakim polem (tile'm) znajduje się kursor
				var tile = [
					Math.floor((mouseState.click[0]-offsetX)/gameState.tileW),
					Math.floor((mouseState.click[1]-offsetY)/gameState.tileH)
				];
				//nastepnie sprawdzamy czy użytkownik wcisnął lewy czy prawy przycisk myszki przy pomocy zapisanej wcześniej informacji
				if(mouseState.click[2]==1)
				{
					//gdy wcisnął lewy to uruchamiamy metodę click() w elemencie Tile w liście grid
					grid[((tile[1] * cDiff.width) + tile[0])].click();
				}
				else
				{
					//po prawym przycisku myszki uruchamiamy funkcję flag() która flaguje dane pole
					grid[((tile[1] * cDiff.width) + tile[0])].flag();
				}
			}
			//gdy wszystkie inne warunki nie spełnią się, sprawdzamy czy położenie y myszki jest większe niż 380 (w przełożeniu na rzeczywiste położenie sprawdzamy czy myszka jest poniżej pola gry tam gdzie jest napis menu)
			else if(mouseState.click[1]>=380)
			{
				gameState.screen = 'menu';
			}
			
			mouseState.click = null;
		}
	}
}

window.onload = function() { 
	canvas = document.getElementById('game').getContext('2d');
	//dodajemy do obiektu canvas trzy zdarzenia aby móc obsługiwać ruch myszką, kliknięcie lewym oraz prawym przyciskiem myszki
	//pierwsze zdarzenie to obsługa kliknięcia myszki; do atrybutu 'click' dodajemy koordynaty kliknięcia myszki oraz trzecią wartość '1' aby odróżnić lewy przycisk od prawego w innych miejscach skryptu
	document.getElementById('game').addEventListener('click', 
	function(e) {
		var pos = realPos(e.pageX, e.pageY);
		mouseState.click = [pos[0], pos[1], 1];
	});
	//dodajemy następnie zdarzenie ruchem myszki - w momencie poruszenia zmieniamy zapisane położenie na nowe odczytane z funkcji realPos
	document.getElementById('game').addEventListener('mousemove',
	function(e) {
		var pos = realPos(e.pageX, e.pageY);
		mouseState.x = pos[0];
		mouseState.y = pos[1];
	});
	//ostatnim zdarzeniem jest zdarzenie contextmenu które oznacza kliknięcie prawym przyciskiem myszki - tym razem również zapisujemy do atrybutu .click położenie kursora lecz teraz trzecia wartość wynosi 2 
	//pozwoli to poprawnie odczytać akcje użytkownika podczas gry
	document.getElementById('game').addEventListener('contextmenu',
	function(e) {
		e.preventDefault();
		var pos = realPos(e.pageX, e.pageY);
		mouseState.click = [pos[0], pos[1], 2];
		return false;
	});
	
	requestAnimationFrame(drawGame);
};
//funkcja która rysuje wewnątrz canvas'u
function drawMenu()
{
	canvas.fillRect(0, 0, 300, 400);
	canvas.textAlign = 'center';
	canvas.font = "bold 20pt sans-serif";
	canvas.fillStyle = "#000000";
	
	var y = 100;
	
	//w pętli rysujemy wszystkie napisy z poziomami trudności 
	for(var d in difficulties)
	{
		var mouseOver = (mouseState.y>=(y-20) && mouseState.y<=(y+10));
		
		if(mouseOver) { canvas.fillStyle = "#000099"; }
		
		difficulties[d].menuBox = [y-20, y+10];
		canvas.fillText(difficulties[d].name, 150, y);
		y+= 80;
		
		if(mouseOver) { canvas.fillStyle = "#000000"; }
	}
	
	var y = 120;
	canvas.font = "italic 12pt sans-serif";
	//w tej pętli rysujemy wszystkie napisy z najlepszymi czasami rozgrywki dla każdego poziomu trudności
	for(var d in difficulties)
	{
		//rysuje napis jeżeli dla danego poziomu nie ma najlepszego czasu 
		if(difficulties[d].bestTime==0)
		{
			canvas.fillText("Brak najlepszego czasu", 150, y);
		}
		else
		{
			//jeżeli dla danego poziomu trudności znalazł się czas gry to odpowiednio go formatujemy i wyświetlamy
			var t = difficulties[d].bestTime;
			var bestTime = "";
			//jeżeli najlepszy czas zajął więcej niż minutę to odpowiednio go formatujemy 
			if((t/1000)>=60)
			{
				bestTime = Math.floor((t/1000)/60) + ":";
				t = t % (60000);
			}
			//nie zależnie ile zajęła nam gra dodajemy na końcu tekstu sekundy oraz milisekundy oraz całość wyświetlamy
			bestTime += Math.floor(t/1000) +
				"." + (t%1000);
			canvas.fillText("Najlepszy czas : " + bestTime, 150, y);
		}
		//co obrót pętli obniżamy koordynaty y aby rysować teksty pod sobą
		y += 80;
	}
}
//metoda która wykonuje się podczas rozgrywki
function drawPlaying()
{
	var halfW = gameState.tileW / 2;
	var halfH = gameState.tileH / 2;
	
	var cDiff = difficulties[gameState.difficulty];
	canvas.fillRect(0, 0, 300, 400);
	canvas.textAlign = "center";
	canvas.textBaseline = "bottom";
	
	canvas.fillStyle = "#000000";
	canvas.font = "12px sans-serif";
	canvas.fillText(cDiff.name, 150, 20);
	
	canvas.fillText("Wróć do menu", 150, 390);
	//jeżelie nie przegraliśmy (czyli gramy dalej) to wyświetlamy aktualizowany tekst z czasem gry oraz z ilością min na planszy 
	if(gameState.screen!='lost')
	{
		canvas.textAlign = "left";
		canvas.fillText("Miny: " + cDiff.mines, 10, 40);
	
		var whichT = (gameState.screen == 'won' ?
			gameState.timeTaken : gameTime);
		var t = '';
		if((gameTime / 1000) > 60)
		{
			t = Math.floor((whichT / 1000) / 60) + ':';
		}
		var s = Math.floor((whichT / 1000) % 60);
		t += (s > 9 ? s : '0' + s);
	
		canvas.textAlign = "right";
		canvas.fillText("Czas: " + t, 290, 40);
	}
	//jeżeli przegraliśmy bądź wygraliśmy odpowiednio pokazujemy tekst
	if(gameState.screen=='lost' || gameState.screen=='won')
	{
		canvas.textAlign = "center";
		canvas.font = "bold 20px sans-serif";
		canvas.fillText(
			(gameState.screen=='lost' ?
				"Koniec gry!" : "Wygrana!"), 150, offsetY - 15);
	}
	
	canvas.strokeStyle = "#999999";
	canvas.strokeRect(offsetX, offsetY,
		(cDiff.width * gameState.tileW),
		(cDiff.height * gameState.tileH));
	
	canvas.font = "bold 10px monospace";
	canvas.textAlign = "center";
	canvas.textBaseline = "middle";
	
	//pętla odpowiedzialna za wyświetlenie całej planszy gry na naszym canvasie
	for(var i in grid)
	{
		var px = offsetX + (grid[i].x * gameState.tileW);
		var py = offsetY + (grid[i].y * gameState.tileH);
		//jeżelie przegraliśmy to zmieniamy styl wyświetlania tych pól gdzie znalazła się bomba (aby pokazać gdzie wszystkie są na planszy)
		if(gameState.screen=='lost' && grid[i].hasMine)
		{
			canvas.fillStyle = "#ff0000";
			canvas.fillRect(px, py,
				gameState.tileW, gameState.tileH);
			canvas.fillStyle = "#000000";
			canvas.fillText("X", px + halfW, py + halfH);
		}
		//jeżeli odkryliśmy dane pole to odpowiednio dopasowujemy styl oraz wyświetlamy pobliskie zagrożenie wokół niego
		else if(grid[i].currentState=='visible')
		{
			canvas.fillStyle = "#dddddd";
			canvas.strokeRect(px, py,
				gameState.tileW, gameState.tileH);
			
			if(grid[i].danger)
			{
				canvas.fillStyle = colors[grid[i].danger-1];
				canvas.fillText(grid[i].danger, px + halfW, py + halfH);
			}
		}
		//gdy żaden z powyższych warunków się nie spełnił to wyświetlamy pole jako zakryte bądź jako oflagowane (jedyna różnica w kolorze oraz w literce na polu)
		else
		{
			canvas.fillStyle = "#cccccc";
			canvas.fillRect(px, py,
				gameState.tileW, gameState.tileH);
			canvas.strokeRect(px, py,
				gameState.tileW, gameState.tileH);
			
			if(grid[i].currentState=='flagged')
			{
				canvas.fillStyle = "#0000cc";
				canvas.fillText("P", px + halfW, py + halfH);
			}
		}
	}
}
//główna funkcja która liczy czas przy użyciu kalkulacji klatek (licząc różnicę między klatkami przy użyciu Date.now()) oraz wywołuje inne potrzebne funkcje (updateGame oraz drawPlaying)
function drawGame()
{
	if(canvas==null) { return; }
	//sekcja obliczająca upływ czasu
	var currentFrameTime = Date.now();
	if(lastFrameTime==0) { lastFrameTime = currentFrameTime; }
	var timeElapsed = currentFrameTime - lastFrameTime;
	gameTime += timeElapsed;
	
	updateGame();

	var sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
	}
	//czyszczenie canvasu aby przygotować go pod funkcje rysujące menu/rozgrywkę
	canvas.fillStyle = "#ddddee";
	canvas.fillRect(0, 0, 300, 400);
	
	if(gameState.screen=='menu') { drawMenu(); }
	else { drawPlaying(); }
	
	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}

function realPos(x, y)
{
	var p = document.getElementById('game');
	
	do {
		x -= p.offsetLeft;
		y -= p.offsetTop;
		
		p = p.offsetParent;
	} while(p!=null);
	
	return [x, y];
}