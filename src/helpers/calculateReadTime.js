//deze functie werkt niet, weet niet hoezo. Ik stuur de formState.content als argument mee. Als ik in de functie
// console.log(text) zet en deze log, dan krijg ik de tekst te zien. Hij komt dus binnen als string.
// Ik splits op witregels en sla die op als variabele amountOfWords. Dat wordt een array, met elk woord als item.
// van een array kan je het aantal items bepalen via .length property. Dus gedaan. En dat getal sla ik op als numberAmountOfWords.us
// En dan maak ik berekening en vraag dat getal terug te geven en op te slaan in allData dat we doorsturen naar de backend.


function calculateReadTime(text) {

        const amountOfWords = text.split(' ');
        const numberAmountOfWords = amountOfWords.length;

        const readTime = Math.round(numberAmountOfWords / 100 * 0.3);
        return readTime;


    }




export default calculateReadTime;