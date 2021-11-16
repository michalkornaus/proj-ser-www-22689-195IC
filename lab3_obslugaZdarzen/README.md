## proj-ser-www-22689-195IC
### Lab. nr 3 - "Obsługa zdarzeń"  
Folder **js** zawiera 2 pliki ze skryptami *index.js* oraz *letter.js* - które obsługują funkcje i elementy na każdej z tych stron.

#### Elementy na stronie startowej

Na stronie startowej **index.html** zdarzeniami które zostały obsłużone są *mouseEnter*, *mouseMove*, *dragStart*, *dragOver*, *drop*, *mouseDown* oraz *mouseLeave*.  
Pierwszym elementem jest data, która odświeża się na zdarzenie *mouseEnter*.  Pomarańczowy prostokąt obsługuje *mouseMove* i wypisuje po ruchu myszką na nim koordynaty kursowa.  
Następnie mamy obsługę dragów - przy pomocy dwóch prostokątnych divów oraz paragrafu którego możemy przemieszczać pomiędzy kontenerami.  
Ostatnim elementem jest przycisk na dole który wykrywa czy klikneliśmy myszką na niego oraz czy opuściliśmy obszar.  
![index1](lab3_obslugaZdarzen/screens/1.PNG)
  
![index2](lab3_obslugaZdarzen/screens/2.PNG)


#### Elementy na stronie z listem

Na stronie z listem **letter.html** znajduje się obsługa zdarzń *resize*, *click*, *keyUp*, *wheel* oraz *keydown*.
Po zmianie rozmiaru strony baner zmieni swój kolor na losowy. Dodajemy zdarzenie kliknięcia dla przycisku na samym dole.  
Przycisk *utwórz okienko* utworzy nam nowe małe okno które możemy przesuwać przy pomocy przycisków WASD oraz strzałek.  
![letter1](/lab3_obslugaZdarzen/screens/3.PNG)
![letter2](/lab3_obslugaZdarzen/screens/4.PNG)  
 Dodatkowo przy użyciu scrolla możemy zmienić wartość baneru na liczbę przewiń myszki w obie strony.  
 Przy pomocy *keyUp* wykrywamy jaki klawisz wcisneliśmy i wypisujmey go pod przyciskiem.  
![letter3](/lab3_obslugaZdarzen/screens/5.PNG)

