//deze functie werkt niet, weet ook niet hoe ik kan zien of er wel iets binnenn komt. Als ik console.log(text);
//alleen schrijf, dan gebeurd er ook niets. Ik snap dat je moet splitsen op witregels, dan krijg je het aantal
// woorden en op basis daarvan kan je uitrekenen hoeveel tijd het kost.


function calculateReadTime(text) {
        const amountOfWords = text.split(' ');
        const totalAmountOfWords = amountOfWords.length;

        const readTime = Math.round(totalAmountOfWords / 100 * 0.3);

        return readTime;

    }


export default calculateReadTime;