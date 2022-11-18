/*A questo punto una volta terminato il vostro layout, include un vostro file javascript e fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.
Il prezzo orario per una commissione varia in questo modo:
Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti.
Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :slightly_smiling_face:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).

CONSIDERAZIONI FINALI e BONUS:
Mentre come bonus javascript dovete far diventare il codice sconto inserito di colore rosso, qualora quello inserito non sia valido.
Inoltre se il codice fornito è valido, eliminare quel codice dall’elenco dei codici sconto disponibili, il codice sconto non sarà più usabile.

Super Bonus: Creare una struttura dati adeguata per contenere tutte le informazioni relative ai progetti presenti nella sezione “Portfolio”. Rimuovere quindi le card dal markup nel file html e stamparle in pagina dinamicamente tramite l’utilizzo di JavaScript.
*/


//------------------esercizio----------------------//

//bottone send al click
//funzione "clickSend" al click

//codici promozionali in un array
arrayCodici = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


//superbonus (card tramite js)
//array carte
let arrayPortfolio = [
    {
        sito: "Cabin Website",
        foto: "./img/portfolio/cabin.png"
    },

    {
        sito: "Cake Website",
        foto: "./img/portfolio/cake.png"
    },

    {
        sito: "Circus Website",
        foto: "./img/portfolio/circus.png"
    },

    {
        sito: "Game Website",
        foto: "./img/portfolio/game.png"
    },

    {
        sito: "Safe Website",
        foto: "./img/portfolio/safe.png"
    },

    {
        sito: "Submarine Website",
        foto: "./img/portfolio/submarine.png"
    }
];

let raccoltaPortfolio = document.getElementById("raccoltaPortfolio");

for(let i = 0; i < arrayPortfolio.length; i++){
    let carta = arrayPortfolio[i];
    raccoltaPortfolio.innerHTML += 
    `
    <div class="col-12 col-md-6 col-xl-4">
        <div class="card border border-1">
            <img src="${carta.foto}" class="card-img-top p-0 m-0" alt="logo">
            <h5 class="card-title text-center">${carta.sito}</h5>
            <div class="text-center mb-3">
              <a class="btn btn-info" href="#" role="button">Preview</a>
              <a class="btn btn-outline-info" href="#" role="button">Visit site</a>
            </div>
        </div>
    </div>
    `
};


//--------------------------------------------//



//-------------------funzioni-------------------//

//funzione per click del bottone
function clickSend(event) {
    event.preventDefault();

    let tipoDiLavoro = document.getElementById("inputWork").value;
    let numeroOre = parseInt(document.getElementById("inputHours").value);
    let inputCodice = (document.getElementById("inputCode").value).toUpperCase();

    //tipo di lavoro
    if (tipoDiLavoro == 1) {
        prezzoOre = (numeroOre * 20.50).toFixed(2);
    } else if (tipoDiLavoro == 2) {
        prezzoOre = (numeroOre * 15.30).toFixed(2);
    } else if (tipoDiLavoro == 3) {
        prezzoOre = (numeroOre * 33.60).toFixed(2);
    };

    //codice sconto
    let codiceInseritoUtente = codiceInArray(arrayCodici, inputCodice);

    if (codiceInseritoUtente) {
        prezzoOre = (prezzoOre * 0.75).toFixed(2);
    } else {
        alert("Discont Code non valido o mancante. Calcolo tariffa prezzo pieno.");
        prezzoOre = prezzoOre;
    };

    //stampa su pagina e console
    console.log("Il prezzo finale del lavoro è di: " + prezzoOre + " € ");
    document.getElementById("prezzo-totale").innerHTML = "Il prezzo finale è di: <b>" + prezzoOre + " € </b>";

};

//funzione se il codice inserito è presente nell'array
function codiceInArray() {
    inputCodice = (document.getElementById("inputCode").value).toUpperCase();
    for (let i = 0; i < arrayCodici.length; i++) {
        if (inputCodice == arrayCodici[i]) {
            return true;
        }
    }
    return false;
}

//-------------------------------------//
