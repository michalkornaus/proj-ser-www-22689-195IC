## proj-ser-www-22689-195IC
# Lab7 - Aplikacja w React nr. 2

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### Pierwszym krokiem do stworzenia prostej aplikacji SPA było utworzenie paska nawigacyjnego, dzięki któremu można przełączać z łatwością między innymi podstronami. W tym wypadku skorzystałem z gotowego szablonu, który zmodyfikowałem i użyłem w sekcji routingu.
![screen1](/screens/1.PNG)
##### Pierwsza podstrona mojej aplikacji wygląda tak samo, jak ta z poprzednich laboratoriów z jedną różnicą, na przycisku **Zmień Kategorie** widać dodatkową ikonkę.
![screen2](/screens/2.PNG)
##### Na pierwszej podstronie jak widać na poniższym zrzucie ekranu znajduje się jedynie parę komponentów takich jak:  
**Button, Container, RotateRightIcon**.
##### Nie ma ich zbyt dużo ponieważ podstrona ta nie implementuje dużej funkcjonalności.
![screen0](/screens/0.PNG)


##### Kod źródłowy pliku *Layout.js* który stosuje jako pasek nawigacyjny. Jak widać posiada on zdecydowanie więcej komponentów - które są potrzebne do utworzenia porządnego i responsywnego appbara. Implementuje on takie komponenty jak:  
**AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuIcon, Container, Button, MenuItem**  
##### Większość tych komponentów jest dość prosta w zrozumieniu np. Typography odpowiada za czyste i efektywne wyświetlanie zawartości na stronie.  
##### Importuje również dwa elementy potrzebne do poprawnego routingu między podstronami:  
**Outlet, Link**.  
![screen3](/screens/3.PNG)
##### W innej sekcji kodu w pliku Layout można znaleźć miejsce w którym znajdują się przyciski dzięki którym można przenieść się na inną podstronę. Odpowiedzialny jest za to element *Link* z odpowiednim parametrem **to=** który odczytuje je router w głównym pliku *App.js*.
![screen4](/screens/4.PNG)
##### Kod źródłowy pliku *App.js*. Plik ten odpowiedzialny jest za poprawny routing po podstronach, osiągane jest to poprzez użycie elementów:  
**BrowserRouter, Routes, Route**.  
##### Element *Routes* jest nową wersją elementu *Switch* więc korzystałem z niego podczas pisania aplikacji.  Na górze kodu widzimy importy odpowiednich funkcji z każdej podstrony które wkładamy w odpowiednie ścieżki routera.
![screen6](/screens/6.PNG)
##### Pokazanie responsywności paska nawigacyjnego. Jak widać po przeskalowaniu strony automatycznie tworzy się lista rozwijana która wyświetla podstrony do wybrania.
![screen5](/screens/5.PNG)

##### Na kolejnej, drugiej podstronie aplikacji znajduje się prosty formularz rejestracji nowego użytkownika. Ma on elegancki oraz minimalistyczny wygląd jak i automatycznie dobrane kolory elementów i tekstów. Pod polami wejściowymi znajduję się checkbox oraz przycisk do zarejestrowania się. Dodatkowo na samym dole znajduje się pole copyright.
![screen8](/screens/8.PNG)
##### Przetestowanie formularza - Jak widzimy po wpisaniu mojego imienia tekst wyróżnia się ciemniejszym odcieniem. Po najechaniu na któreś z pól, jego kolor zmienia się automatycznie na niebieski, w ładny sposób pokazując element na którym obecnie jesteśmy.
![screen9](/screens/9.PNG)
##### Jak widać formularz ten również składa się z wielu komponentów tak jak pasek nawigacyjny. Na tej podstronie korzystałem z nowych elementów takich jak:  
**Avatar, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, LockOutlinedIcon, ThemeProvider**.  
##### Element *Grid* pozwala z łatwością rozmieszczać elementy w stylu siatki - przydało się to do rozmieszczenia elementów pól tekstowych. Elementy takie jak *Checkbox* oraz *TextField* są odpowiednikami zwykłych inputów HTML z odpowiednimi parametrami.
![screen7](/screens/7.PNG)

##### Na trzeciej, ostatniej podstronie aplikacji znajduję się pole testowe dla elementu *SpeedDial* czyli tzn. "korbki", która po najechaniu pokazuje nam różne opcje takie jak Zapisz, kopiuj itd. Możemy na tej podstronie testować różne ułożenia tej kontrolki i w którą stronę elementy mają się wysuwać zależnie od jej położenia. Takie chowające się elementy są teraz popularne i mogą się przydać na stronie gdzie potrzeba zachować elegancki wygląd.
![screen10](/screens/10.PNG)
##### Po zmienieniu kierunku na lewo, widzimy że elementy wychodzą z lewej strony niebieskiego kółka. Możemy również ukryć kontrolkę przy pomocy elementu *Switch*.
![screen11](/screens/11.PNG)
![screen12](/screens/12.PNG)
![screen14](/screens/14.PNG)
##### Na tej podstronie znajduję się pare nowych komponentów takich jak:  
**Radio, RadioGroup, Switch, SpeedDial, SpeedDialIcon, SpeedDialAction, FileCopyIcon, SaveIcon, PrintIcon, ShareIcon**  
##### Jak widać duża część tych komponentów to zwykłe ikonki które również trzeba importować w takim samym stylu jak inne ważniejsze komponenty.
![screen13](/screens/13.PNG)
