## proj-ser-www-22689-195IC
### Lab. nr 2 - "Praca z elementami DOM z wykorzystaniem Javascript"  
Folder **js** zawiera 4 skrypty *form.js*, *index.js*, *letter.js*, *textbook.js* - które obsługują funkcje i elementy na każdej z tych stron.

### Każdy z plików .js zawiera krótkie komentarze do funkcji wyjaśniajace ich działanie 

#### Elementy na stronie startowej

Na stronie startowej **index.html** głównymi zmianami jest zmiana koloru tła, usunięcie atrybutu obrazka
 oraz tekst wyświetlający na bieżąco aktualną godzinę oraz datę z literalnym wyświetleniem miesiąca.  
Dodatkowo poniżej widzimy dodatkowy przycisk, dzięki któremu możemy utworzyć nową zakładkę.
![index1](/screens/1.PNG)

Widok po utworzeniu nowej zakładki. Widzimy, że przycisk zmienił swój kolor oraz napis jak i u góry na pasku widzimy nową zakładkę.  
![index2](/screens/2.PNG)

Po wejściu w powyższą zakładkę odnosi nas do poniższej strony, która jedynie wyświetla nam informację o tym, że znaleźliśmy ukrytą stronę.
![hidden](/screens/3.PNG)


#### Elementy na stronie z listem

Na stronie z listem **letter.html** znajduje się dużo zmian wizualnych. Pierwszymi widocznymi zmianami są kolory tła i nagłówka
 - jak i napis na nagłówku *Nowy losowy kolor co 5 sekund*, nagłówek ten zmienia rzeczywiście co 5 sekund swój kolor.  
 Oprócz tego usunąłem parę pierwotnych elementów listu jak i dodałem np. informację o typie dokumentu i tytule.  
 Widzimy też obramowanie do jednego z paragrafów.
![letter1](/screens/4.PNG)
  
Po kliknięciu w przycisk *Wyślij list* skrypt znika zawartość całego listu jak i powiadamia nas o wysłaniu listu.
![letter2](/screens/5.PNG)

#### Elementy na stronie z listem

Na stronie z podręcznikiem **textbook.html** nie zostało zmienione dużo - podmiana elementu oraz dodawanie na początku tekstu do istniejącego elementu
![textbook](/screens/6.PNG)


#### Elementy na stronie z formularzem

Strona z formularzem **form.html** nie zmieniła się od poprzednich laboratoriów lecz tym razem po wciśnięciu przycisku coś się dzieje.
![form1](/screens/7.PNG)

Po wprowadzeniu powyższych danych do formularze i wciśnięciu przycisku pojawi nam się nowe okienko, w którym mamy wypisane informacje  
o użytkowniku którego wpisaliśmy - jak widzimy wszystko ładnie się wypisało.
![form2](/screens/8.PNG)

W przypadku gdy nie wpiszemy np. roku urodzenia ani nie wybierzemy żadnego z hobby to formularz dopasuje swoją wiadomość i pokaże, że te dane nie zostały podane.
  Na poniższym zrzucie ekranu widzimy to dla roku oraz hobby lecz działa to też dla płci użytkownika - imię oraz nazwisko jest wymagane w tym formularzu.
![form3](/screens/9.PNG)