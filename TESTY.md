1. Próba start() oraz mapa()
Wynik oczekiwany:
1. Recepcja
2. Magazyn
3. Serwerownia
4. Wyjscie 
Pokój, w którym jesteś powinien być oznaczony <-- jestes tutaj
Wyświetlanie mapy nie powoduje utraty poziomu energii
Wynik otrzymany:
Mapa pokazuje 4 pomieszczenia. Pokój, w którym jesteś jest oznaczony. Energia pozostaje bez zmian.

Darmowe inforamcje
Próba:
start()
status()
mapa()
rozejrzyj()
pomoc()
Wynik oczekiwany:
Informacje są wyświetlane i żadna z tych funkcji nie zużywa energii.
Wynik otrzymany:
Informacje wyświetlają się poprawnie. Energia się nie zmienia

2. Ruch w nieznany kierunek
Próba:
start(), idz("lewo")
Wynik oczekiwany:
Informacja, że ruch nie został wykonany, poniewaź natrafiłeś na ścianę.Nie zużyto energii oraz pozostajesz w pokoju 1.
Wynik otrzymany:
Gracz zostaje w pokuju 1, a energia nadal wynosi 10.

3. Ruch w prawo
Próba:
start(), idz("prawo")
Wynik oczekiwany:
Gracz przechodzi z pokoju 1 do pokoju 2. Ruch kosztuje 1 energię, więc energia zmniejsza się z 10 do 9.
Wynik otrzymany:
Gracz przechodzi do pokoju 2. Energia zmniejsza się do 9. Wyświetla się opis magazynu: Magazyn. Na polce lezy bezpiecznik.
4. Dwukrotne zabranie przedmiotu
Próba:
start(), akcja("przedmiot"), akcja("przedmiot")
Wynik oczekiwany:
Pierwsze użycie akcja("przedmiot") zabiera przedmiot i zużywa 1 energię. Drugie użycie jest odrzucone, ponieważ przedmiot został już zabrany. Druga próba nie zużywa energii.

Wynik otrzymany:
Pierwsza próba wyświetliła Zabierasz przedmiot,który podałeś. i energia zmniejszyła się z 10 do 9. Druga próba wyświetliła Tutaj nie ma przedmiotu do zabrania. i nie zużyła dodatkowej energii.
