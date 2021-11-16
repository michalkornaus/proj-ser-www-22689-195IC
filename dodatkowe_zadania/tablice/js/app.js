//Zadanie 1
document.open();
for (let i=0; i < countries.length; i++)
{
	document.write("<p>"+countries[i].name + " - " + countries[i].population + "<br></p>");
}
document.close();

//Zadanie 2
document.open();
var average = 0;
countries.forEach(country => {
	average = average + country.population;
});
average = average / countries.length;
document.write("<p>Średnia ludność: " + parseInt(average) + "</p>");

//Zadanie 3
const plus_wzrost = countries.filter(el => el.grow > 0);
document.write("<p>Ilość państw z dodatnim wzrostem: " + plus_wzrost.length + "</p>");

//Zadanie 4
const minus_wzrost = countries.filter(el => el.grow < 0);
document.write("<p>Ilość państw z ujemnym wzrostem: " + minus_wzrost.length + "</p>");

//Zadanie 5
var percent = 0;
countries.forEach(country => {
	percent = percent + country.world_area_in_percent;
});
document.write("<p>Procent powierzchni ziemi zajęty przez wszystkie państwa: " + percent + "</p>");

//Zadanie 6
var fertility = 0;
countries.forEach(country => {
	if(country.fertility_rate != null)
		fertility = fertility + country.fertility_rate;
});
fertility = fertility / countries.length;
document.write("<p>Średnia dzietność na świecie: " + fertility + "</p>");

//Zadanie 7
var age = 0;
countries.forEach(country => {
	if(country.medium_age != null)
		age = age + country.medium_age;
});
age = age / countries.length;
document.write("<p>Średnia wieku na świecie: " + parseInt(age) + "</p>");

//Zadanie 8
const poland = countries.find(el => el.name === "Poland");
console.log(poland);
document.write("Średnia wieku w polsce: " + poland.medium_age);
if(poland.medium_age > age){
	document.write("<p>Średnia wieku w polsce jest większa niż na świecie.</p>");
}
else
{
	document.write("<p>Średnia wieku w polsce jest mniejsza niż na świecie.</p>");
}

document.close();