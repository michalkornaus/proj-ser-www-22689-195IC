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
	
	selectGender(windowObject);
		
	var hobbys = selectHobby();
	windowObject.document.write("<p>Hobby użytkownika: " + ((hobbys && hobbys.length > 0) ? "<br>"+ selectHobby()+"</p>" : "Brak wybranych</p>"));
}

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

function selectHobby()
{
	const checkboxes = document.querySelectorAll('input[name="hobby"]:checked');
	let values = [];
	checkboxes.forEach((checkbox) => {
		values.push(checkbox.value);
	});
	return values;
}
