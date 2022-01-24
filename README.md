## proj-ser-www-22689-195IC
# Lab8 - Aplikacja w React nr. 3

### Projekt ten wybrałem ze strony **reactjsexample.com**:   *https://reactjsexample.com/todo-app-with-react-and-redux/*

#### Widok katalogu z zaimportowanym projektem ze strony reactjsexample
![screen1](/screeny/1.PNG)
#### Po zaimportowaniu projektu trzeba zainstalować wszystkie moduły i pakiety przy pomocy polecenia *npm install* - w celu poprawnego działania aplikacji.
![screen2](/screeny/2.PNG)
#### Następnie po zainstalowaniu wszystkich modułów można odpalić lokalny serwer i zobaczyć jak wygląda aplikacja.
![screen3](/screeny/3.PNG)
#### Aplikacja którą wybrałem jest prostą apką ToDo przy użyciu React'a oraz biblioteki *redux* - pomaga ona w tworzeniu stabilnych i przewidywalnych stanów obiektów itd.
![screen4](/screeny/4.PNG)
#### Po zcommitowaniu całego projektu na repozytorium możemy zająć się zmianą kodu i podejrzeć jak to wygląda przy pomocy różnych narzędzi. W celu wgrywania zmian na repozytorium używam programu *GitHub Desktop*, która w łatwy sposób pozwala poglądać zmiany i je commitować.
![screen5](/screeny/5.PNG)
#### Oprócz programu GitHub Desktop możemy skorzystać z konsoli *git bash* na którym mamy większe możliwości odnośnie zarządzania repo, kosztem szaty graficznej. 
#### Możemy użyć polecenia *git diff* do podejrzenia zmian (podglądam narazie przykładowy plik automatycznie utworzony, nie są to moje zmiany) - jak widać ta linijka na czerwono została usunięta, a te na zielono świeżo dodane.
![screen6](/screeny/6.PNG)
#### Tak jak w każdej aplikacji todo możemy wpisywać nowe zadania i je dodawać, mamy ich listę oraz dodatkowo podsumowaną ilość wszystkich todo. Jest parę elementów, które chciałbym zmienieć np. obecnie można wpisywać pusty element do listy.
![screen7](/screeny/7.PNG)
#### W punkcie startowym aplikacji widać parę importów z innych skryptów przykładowo *store* oraz *Provider* z biblioteki Redux. Reszta kodu wygląda podobnie jak w każdym wypadku lecz dodatkowo główną aplikację otaczamy komponentem *Provider* z parametrem.
![screen8](/screeny/8.PNG)
#### Główna aplikacja składa się z paru komponentów takich jak *TodoForm* który wyświetla formularz dodawania nowego zadania, *Todos*, który wyświetla wszystkie taski. Dodatkowo jest zmienna *pendingTasks* który pokazuje ilość wszystkich zadań.
![screen9](/screeny/9.PNG)
#### W pliku *TodoForm.tsx* mamy utworzony komponent formularza dodawania nowego taska. Funkcja ta również korzysta z biblioteki redux oraz posiada dwie event funkcje które przechwytują zmianę w inputcie oraz submita całego formularza.
![screen10](/screeny/10.PNG)
#### Po utworzeniu modyfikacji w kodzie możemy je podejrzeć znowu na parę sposobów - jednym z nich jest program Github Desktop, który w elegancki sposób pokazuje zmodyfikowane pliki i miejsca w których zostało coś zmienione.
![screen11](/screeny/11.PNG)
#### Możemy również użyć polecenia git diff, które przechodzi przez wszystkie zmodyfikowane pliki i pokazuje nam zmiany. Jak widać w pierwszym pliku zmieniłem tytuł nagłówka z *Todo App* na *Aplikacja ToDo React - 22689*.
![screen12](/screeny/12.PNG)
![screen13](/screeny/13.PNG)
#### Dodatkowo można użyć polecenia *git difftool* również w konsoli bash, które pokazuje z lewej plik niezmodyfikowany oraz po prawej widok zmienionego już kodu. Schemat kolorów jest dość nieczytelny przy użyciu tego polecenia - moim sposobem sprawdzania zmian zawsze był program GitHub Desktop i myślę, że będzie nim dalej.
![screen14](/screeny/14.PNG)
#### Widok zmian w aplikacji, kiedy nie ma zapisanych tasków komunikat na dole mówi, że nie ma teraz żadnych zadań (poprzednio komunikat po angielsku mówił, że na liście znajduje się 0 elementów co jest dość nieeleganckim rozwiązaniem)
![screen15](/screeny/15.PNG)
#### Dla jednego zapisanego zadania również wyświetla się niestandardowy komunikat, dopiero od 2 zadań wzwyż pokazuje się ilość liczbowo.
![screen16](/screeny/16.PNG)
#### Jak widać dla 3 zadań komunikat na dole wyświetla się w poprawnej formie.
![screen17](/screeny/17.PNG)
#### Dodatkowo ostatnią zmianą było utworzenie komunikatu o niepowodzenie z uwagi na puste pole. W oryginale można było dodawać puste taski do listy i nie było z tym problemu - dodałem kawałek kodu walidującego wpisany tekst po naciśnieciu przycisku.
![screen18](/screeny/18.PNG)