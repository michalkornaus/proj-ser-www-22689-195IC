# proj-ser-www-22689-195IC
## Lab. nr 5 - Asynchroniczny JavaScript

### Funkcja zwrotna Callback
##### Zadanie zaczynam od utworzenia własnego obiektu osoby - która przechowuje wiele atrybutów
![zad1b](/zrzuty/zad1b.PNG)
##### Przy użyciu dwóch funkcji zwrotnych pobieram z obiektu wybrane atrybuty i przekazuje je argumentem, aby wyświetlić komunikaty w konsoli
![zad1c](/zrzuty/zad1c.PNG)
##### Wyświetlone komunikaty w konsoli 
![zad1a](/zrzuty/zad1a.PNG)

### Obiekt Promise
##### Przy użyciu obiektu Promise oraz metody fetch pobieram dane ze strony z przykładowymi danymi JSON.  W utworzonym obiekcie Promise sprawdzam czy nazwa użytkownika dla takiego użytkownika się zgadza. Potem implementuje metody then, catch i finally dla obiektu promise - gdzie dodaje dwa atrybuty z obiektu JSON i wyświetlam komunikat.
![zad2c](/zrzuty/zad2c.PNG)
![zad2b](/zrzuty/zad2b.PNG)
##### Drugie zadanie obiektu Promise wygląda analogicznie jak pierwsze - jedyna różnica w komunikacie który wyświetlam - tym razem jest to obiekt z wybranymi atrybutami.
![zad2d](/zrzuty/zad2d.PNG)
![zad2a](/zrzuty/zad2a.PNG)

### async/await + fetch
##### Dla async i await tworzę dwie funkcje - odejmujące dwie wartości oraz tworząca obiekt z nazwą użytkownika i stroną internetową. Składnia różni się znacznie od obiektu Promise lecz pobieranie danych wygląda tak samo.
![zad3b](/zrzuty/zad3b.PNG)
![zad3a](/zrzuty/zad3a.PNG)

### AJAX
![zad4b](/zrzuty/zad4b.PNG)
![zad4a](/zrzuty/zad4a.PNG)

### fetch
![zad5b](/zrzuty/zad5b.PNG)
![zad5a](/zrzuty/zad5a.PNG)

### axios
##### W tym przypadku korzystamy z biblioteki axios w celu pobrania danych ze strony oraz ich pozyskania.  Jedyna różnica między axios i fetch jest przy linku do strony, przy użyciu axios mamy jeszcze metodę .get(). Dodatkowo w celu pobrania atrybutów z obiektu musimy dodać .data aby pozyskać dane.
![zad6b](/zrzuty/zad6b.PNG)
![zad6a](/zrzuty/zad6a.PNG)

### Widok z konsoli
##### Po odpaleniu skryptu i całego kodu (napisanego chronologicznie od zadania 1 do 6) widzimy że funkcje nie pokazują swoich komunikatów synchronicznie.  Ta metoda która szybciej sie wykona, szybciej pokaże wynik - co było tematem tych laboratoriów.
![console](/zrzuty/console.PNG)
