//zad1 - callback
var person = {
    "id": 6,
    "name": "Michał Kornaus",
    "username": "michal990909",
    "email": "michalkornaus99@gmail.com",
    "address": {
      "street": "Kolorowa",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "70-500",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "750353611",
    "website": "mk.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
}
//z1 - task1
var phone = person.phone;
var geo_lat = person.address.geo.lat;

function multiplyNumbers(a, b, fn) {
    var result = a * b;
    fn(result);
}

multiplyNumbers(phone, geo_lat, result => {
    console.log("Zad1 - Task1\nWynik mnożenia: " + result);
});

//z1 - task2
function getName(fn) {
	var name = person.name;
	fn(name)
}
getName(name => {
	var website = person.website;
	console.log("Zad1 - Task2\nImię i nazwisko: " + name + " \nNazwa strony: " + website);
});

//zad2 - promise
//z2 - task1
fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		return response.json();
	})
	.then((data) => {
		var promise = new Promise((resolve, reject) => {
        if (data[4].username == 'Kamren') {
            resolve('Zad2 - Task1\nZnaleziono użytkownika o nazwie użytkownika ' + data[4].username + '!');
        } else {
            reject('Nie znaleziono użytkownika o takiej nazwie użytkownika');
        }
		});
		promise
		.then((message) => {
			console.log(message + "\nID + zipcode = " + (data[4].id + data[4].address.zipcode));
		}).catch(error => console.log("Zad2 - Task1\n", error))
		.finally(() => console.log('Zad2 - Task1 - wykonane'));

    })
	.catch(error => { 
		console.log("Zad2 - Task1\n", error)
	});

//z2 - task2
fetch('https://jsonplaceholder.typicode.com/users/1')
	.then(response => {
		return response.json();
	})
	.then((data) => {
		var promise = new Promise((resolve, reject) => {
        if (data.company.name == 'Romaguera-Crona') {
            resolve('Zad2 - Task2\nZnaleziono użytkownika o nazwie użytkownika ' + data.username + '!');
        } else {
            reject('Nie znaleziono użytkownika o takiej nazwie użytkownika');
        }
		});
		promise
		.then((message) => {
			console.log(message);
			console.log({task: "zad2_task2", username: data.username, address: data.address.city});
		}).catch(error => console.log("Zad2 - Task2\n", error))
		.finally(() => console.log('Zad2 - Task2 - wykonane'));

    })
	.catch(error => { 
		console.log("Zad2 - Task2\n", error)
	});
	
//zad3 - async/await + fetch
//z3 - task1
function subtract_async(a, b){
	console.log("Zad3 - Task1\nOdejmowanie asynchroniczne: " + (a - b));
}
//z3 - task2
function object_async(name, site){
	console.log({task: "zad3_task2", username: name, website: site});
}

async function async_await(link){
	let response = await fetch(link);
	if(response.ok){
		jsonData = await response.json();
		id = jsonData.id;
		lattitude = jsonData.address.geo.lat;
		username = jsonData.username;
		website = jsonData.website;
		subtract_async(id, lattitude);
		object_async(username, website);
	}
}
async_await('https://jsonplaceholder.typicode.com/users/2');

//zad4 - ajax
//z4 - task1
function multiply_ajax(a, b){
	console.log("Zad4 - Task1\nMnożenie AJAX: " + (a * b));
}
//z4 - task2
function object_ajax(name, site){
	console.log({task: "zad4_task2",username: name, webiste: site});
}

let xmlRequest = new XMLHttpRequest();
xmlRequest.open('GET','https://jsonplaceholder.typicode.com/users/3');
xmlRequest.responseType = 'json';
xmlRequest.send();
xmlRequest.onload = function(){
	let response = xmlRequest.response;
	longitude = response.address.geo.lng;
	lattitude = response.address.geo.lat;
	username = response.username;
	website = response.website;
	multiply_ajax(longitude, lattitude);
	object_ajax(username, website);
}
xmlRequest.onerror = function(){
	console.log("Zad4 - Wystąpił błąd ");
}

//zad5 - fetch
//z5 - task1
function add_fetch(a, b){
	console.log("Zad5 - Task1\nDodawanie Fetch: " + (a + parseFloat(b)));
}
//z5 - task2
function object_fetch(name, site){
	console.log({task: "zad5_task2",username: name, webiste: site});
}
fetch('https://jsonplaceholder.typicode.com/users/4')
	.then((response) => {
		return response.json();
	}).then((data) => {
		id = data.id;
		longitude = data.address.geo.lng;
		username = data.username;
		website = data.website;
		add_fetch(id, longitude);
		object_fetch(username, website);
	});
	
//zad6 - axios
//z6 - task1
function divide_axios(a, b){
	console.log("Zad6 - Task1\nDzielenie axios: " + (a / parseFloat(b)));
}
//z6 - task2
function object_axios(name, site){
	console.log({task: "zad6_task2",username: name, webiste: site});
}
axios.get('https://jsonplaceholder.typicode.com/users/5')
	.then((json) => {
		lattitude = json.data.address.geo.lat;
		id = json.data.id;
		username = json.data.username;
		website = json.data.website;
		divide_axios(lattitude, id);
		object_axios(username, website);
	})
