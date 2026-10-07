// WSPOLNY KONTRAKT: nazwy zmiennych i funkcji uzgadnia caly zespol.
const MAKS_ENERGIA = 10;
let pokoj = 1;
let energia = MAKS_ENERGIA;
let karta = false;
let bezpiecznik = false;
let zasilanie = false;
let koniec = false;
let wygrana = false;

// SEKCJA 0 — GOTOWY SILNIK NAUCZYCIELA
function start() {
  pokoj = 1;
  energia = MAKS_ENERGIA;
  karta = false;
  bezpiecznik = false;
  zasilanie = false;
  koniec = false;
  wygrana = false;
  console.log("UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.");
  pomoc();
  rozejrzyj();
}

function zakonczTure() {
  energia = energia - 1;
  console.log("Pozostala energia: " + energia);
  if (wygrana) {
    console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
  } else if (energia === 0) {
    koniec = true;
    console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().");
  }
}

// SEKCJA A — INFORMACJE I MAPA
function nazwaPokoju(numer) {
  switch (numer) {
    case 1:
      return "Recepcja";
    case 2:
      return "Magazyn";
    case 3:
      return "Serwerownia";
    case 4:
      return "Wyjscie";
    default:
      return "Nieznane pomieszczenie";
  }
}
function pomoc() {
  console.log("Informacje (bez kosztu): start(), pomoc(), status(), mapa(), rozejrzyj()");
  console.log('Ruch: idz("prawo") lub idz("lewo")');
  console.log('Akcje: akcja("karta"), akcja("bezpiecznik"), akcja("napraw"), akcja("wyjdz")');
  console.log("Koszt: kazdy poprawny ruch i kazda udana akcja zuzywa 1 energii. Informacje i bledne komendy sa darmowe.");
}
function status() {
  console.log("Pokoj: " + pokoj + " (" + nazwaPokoju(pokoj) + ")");
  console.log("Energia: " + energia + "/" + MAKS_ENERGIA);
  console.log("Karta: " + (karta ? "tak" : "nie"));
  console.log("Bezpiecznik: " + (bezpiecznik ? "tak" : "nie"));
  console.log("Zasilanie: " + (zasilanie ? "wlaczone" : "wylaczone"));
  console.log("Stan gry: " + (wygrana ? "wygrana" : koniec ? "przegrana" : "trwa"));
}
function mapa() {
  for (let numer = 1; numer <= 4; numer = numer + 1) {
    let linia = numer + ". " + nazwaPokoju(numer);
    if (numer === pokoj) {
      linia = linia + " <-- jestes tutaj";
    }
    console.log(linia);
  }
}
function rozejrzyj() {
  switch (pokoj) {
    case 1:
      console.log("Recepcja. " + (!karta ? "Na biurku lezy karta dostepu." : "Biurko jest puste."));
      break;
    case 2:
      if (!bezpiecznik && !zasilanie) {
        console.log("Magazyn. Na polce lezy bezpiecznik.");
      } else {
        console.log("Magazyn. Polka jest pusta.");
      }
      break;
    case 3:
      console.log("Serwerownia. Zasilanie " + (zasilanie ? "dziala." : "nie dziala; potrzebna karta i bezpiecznik, potem akcja(\"napraw\")."));
      break;
    case 4:
      console.log("Wyjscie. Drzwi otworzysz akcja(\"wyjdz\"), gdy zasilanie dziala.");
      break;
    default:
      console.log("Nieznane pomieszczenie.");
  }
}

// SEKCJA B — RUCH
function idz(kierunek) {
  // TODO B1: zablokuj ruch po koncu gry.
  if(koniec)
  {
    console.log("Gra sie zakonczyła");
    return 0;
  }
  // TODO B2: switch kierunku; oblicz kandydat na nowy pokoj.
  let nastepnyPokoj=pokoj;
  switch(kierunek){
    case "prawo":
      {
        nastepnyPokoj++;
        break;
      }
    case "lewo":
      {
        nastepnyPokoj--;
        break;
      }
    default:
      console.log("nie ma takiego kierunku, wybierz poprawny");
      break;
  }
  // TODO B3: odrzuc pokoj poza 1..4 i nieznany kierunek bez kosztu.
  // TODO B4: zapisz poprawny pokoj, rozejrzyj(), zakonczTure().
  console.log("Ruch do uzupelnienia");
}

// SEKCJA C — PRZEDMIOTY I WYGRANA
function akcja(co) {
  // TODO C1: zablokuj akcje po koncu gry.
  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.
  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().
  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  console.log("Akcje do uzupelnienia");
}

start();
