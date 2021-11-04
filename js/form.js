function showForm(){
	//tworzymy nowe puste okienko, o nazwie FormularzOkno o rozmiarach 600x500
	var windowObject = window.open("", "FormularzOkno","width=600,height=500");
	
	//poleceniem windowObject.document.write możemy wpisywać nowe linie strony do naszego okna
	windowObject.document.write("<h2>Formularz użytkownika</h2>");
	windowObject.document.write(Date());
	
	//znajdujemy formularz o naszej nazwie, nasz parametr i wyciagamy z niego wartosc
	windowObject.document.write("<p>Imię użytkownika: " + document.forms["userForm"]["imie"].value + "</p>");
	
	windowObject.document.write("<p>Nazwisko użytkownika: " +  document.forms["userForm"]["nazwisko"].value + "</p>");
	
	//bez funkcji intParse ponieważ formularz zawiera już walidację czy to pole jest liczbą
	var _rok = document.forms["userForm"]["rok"].value;
	if(_rok) {
		windowObject.document.write("<p>Rok urodzenia użytkownika: " + _rok + "</p>");
	}
	else {
		windowObject.document.write("<p>Rok urodzenia nie podany.</p>");
	}
	//uruchamiamy funkcję selectGender z parametrem okna aby móc wpisać odpowiedni komunikat z poziomu tej funkcji
	selectGender(windowObject);
		
	//funkcja selectHobby zwraca nam kolekcję elementów - w poniższym warunku ternary sprawdzamy czy ta kolekcja istnieje oraz czy ma chociażby jeden element -
	// - jeżeli tak to w komunikacie zwracamy wartość tej kolekcji
	var hobbys = selectHobby();
	windowObject.document.write("<p>Hobby użytkownika: " + ((hobbys && hobbys.length > 0) ? "<br>"+ hobbys+"</p>" : "Brak wybranych</p>"));
}

//funkcja przeszukuje cały dokument w celu znalezienia elementow ktore pasuje do wyszukania - element input o nazwie 'gender' 
//na podstawie wybranego checkboxa - wyswietla nam komunikat
function selectGender(windowObject)
{
	const rbs = document.querySelectorAll('input[name="gender"]');
	let selectedGender;
	for (const rb of rbs) 
	{
		if (rb.checked) {
			selectedGender = rb.value;
			break;
		}
	}
	if (selectedGender) {
		windowObject.document.write("<p>Płeć użytkownika: " + selectedGender + "</p>");
	}		
	else {
		windowObject.document.write("<p>Płeć użytkownika nieokreślona.</p>");
	}
}
//funkcja przeszukuje caly dokument i szuka elementow input z nazwa 'hobby' - ktore zostaly zaznaczone  
//w porownaniu z poprzednią funkcją 'selectGender', ta funkcja pozbyla się pętli dzięki sprecyzowaniu :checked w wyszukiwaniu query
//na koniec dodaje je do jednego zmiennej array i zwraca 
function selectHobby()
{
	const checkboxes = document.querySelectorAll('input[name="hobby"]:checked');
	let values = [];
	checkboxes.forEach((checkbox) => {
		values.push(checkbox.value);
	});
	return values;
}
