/*prompt for card number */
let cardNumber = prompt("insira o numero de cartas a serem utilizadas ( deve ser um par entre 4 e 14)")
/*number of right moves to win */
let toWin = cardNumber / 2
/*querySelector for game format based on cardNumber*/
const gameCards = document.querySelector(".game");
gameCards.classList.add("cards-" + cardNumber)
/*showing cards based on cardNumber*/
let cards = []
for (let i = 1; i <= cardNumber; i++) {
    let hiddenCard = document.querySelector(".card.hidden");
    hiddenCard.classList.remove("hidden");
}
/*implementing card pairs on a array*/
for (let i = 1; i <= cardNumber / 2; i++) {
    cards.push(i);
    cards.push(i);
}
/*shuffling the cards*/
cards.sort(comparador);
console.log(cards)
/*[1,3,2,2,1,3] */
/*list with gifs in order */
let gifList = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif",
    "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]
console.log(gifList)

/*setting gifs on their respective cards*/
for (let i = 1; i <= cardNumber; i++) {
    let gifPosition = cards[i - 1]
    let cardGif = gifList[gifPosition - 1]
    let img = document.querySelector(".card" + i + " > .card-back > img")
    img.setAttribute('src', "media/" + cardGif)
}
/*marks witch cards have been selected */
let selectedCards = []
/*marks number of moves*/
let moves = 0
/*already chosen cards that were right*/
let alreadyChosen = []

function comparador() {
    return Math.random() - 0.5;
}
function toggleCard(card) {
    let cardFront = document.querySelector(".card" + card + " > .card-front");
    let cardBack = document.querySelector(".card" + card + " > .card-back");
    cardFront.classList.toggle("hidden");
    cardBack.classList.toggle("hidden");
}
function selectCard(card) {
    if (!(alreadyChosen.includes(card))) {
        moves++;
        /*showing selected card*/
        toggleCard(card)
        /*choosing the first card */
        if (selectedCards.length === 0) {
            selectedCards.push([card, cards[card - 1]]);
        /*choosing the second card */
        } else {
            /*got it right*/
            if (cards[card - 1] === selectedCards[0][1]) {
                toWin -= 1;
                alreadyChosen.push(card);
                alreadyChosen.push(selectedCards[0][0]);
                selectedCards = [];
                if (toWin === 0) {
                    alert("Você ganhou em " + moves + " jogadas!");
                    reset = prompt("Você gostaria de reiniciar o jogo?");
                    if (reset === "sim"){
                        window.location.reload()
                    }

                }
            /*got it wrong*/
            } else {
                const card1 = card;
                const card2 = selectedCards[0][0];
                setTimeout(() => {
                    toggleCard(card2);
                    toggleCard(card1);
                },1000)
                selectedCards = [];
            }
        }
    }
}