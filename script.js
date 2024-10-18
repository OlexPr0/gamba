// Gra w Ruletkę
function grajRuletka() {
    const liczby = [...Array(37).keys()]; // Liczby od 0 do 36
    const wynik = liczby[Math.floor(Math.random() * liczby.length)];
    const wynikRuletkaDiv = document.getElementById('wynikRuletka');
    
    wynikRuletkaDiv.innerText = `Wylosowana liczba: ${wynik}`;
    wynikRuletkaDiv.style.opacity = '1';  // Zmiana opacity na 1
    wynikRuletkaDiv.style.transform = 'translateY(0)';  // Powrót do pozycji początkowej
}

// Gra w Blackjacka
function grajBlackjack() {
    const kartyGracza = losujKarty();
    const kartyKasy = losujKarty();
    const sumaGracza = sumaKart(kartyGracza);
    const sumaKasy = sumaKart(kartyKasy);

    let wynik = '';
    if (sumaGracza > 21) {
        wynik = 'Przegrałeś! Przekroczyłeś 21.';
    } else if (sumaKasy > 21 || sumaGracza > sumaKasy) {
        wynik = 'Wygrałeś!';
    } else if (sumaGracza < sumaKasy) {
        wynik = 'Przegrałeś!';
    } else {
        wynik = 'Remis!';
    }

    const wynikBlackjackDiv = document.getElementById('wynikBlackjack');
    wynikBlackjackDiv.innerText = 
        `Twoje karty: ${kartyGracza.join(', ')} (suma: ${sumaGracza}) | 
        Karty kasyna: ${kartyKasy.join(', ')} (suma: ${sumaKasy}) 
        - ${wynik}`;

    wynikBlackjackDiv.style.opacity = '1';
    wynikBlackjackDiv.style.transform = 'translateY(0)';
}

// Funkcja losująca karty
function losujKarty() {
    const karty = [];
    for (let i = 0; i < 2; i++) {
        karty.push(Math.floor(Math.random() * 11) + 1); // Karty od 1 do 11
    }
    return karty;
}

// Funkcja sumująca karty
function sumaKart(karty) {
    return karty.reduce((a, b) => a + b, 0);
}
