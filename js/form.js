function showForm(form){
	var windowObject = window.open("", "FormularzOkno","width=600,height=500");
	
	windowObject.document.write("<h2>Formularz użytkownika</h2>");
	windowObject.document.write(Date());
	
	windowObject.document.write("<p>Imię użytkownika: " + String(form.imie.value) + "</p>");
	
	windowObject.document.write("<p>Nazwisko użytkownika: " + String(form.nazwisko.value) + "</p>");
	
	if(form.rok.value)
	{
		windowObject.document.write("<p>Rok urodzenia użytkownika: " + String(form.rok.value) + "</p>");
	}
	else
	{
		windowObject.document.write("<p>Rok urodzenia nie podany!</p>");
	}
}

