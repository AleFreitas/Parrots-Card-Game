/*prompt for card number */
const par = [4,6,8,10,12,14]
let cardNumber = 0;
/*checking if cardNumber is a valid number */
while (!(par.includes(cardNumber))){
    cardNumber = Number(prompt("insira o numero de cartas a serem utilizadas ( deve ser um par entre 4 e 14)"))
}
/*number of right moves to win */
let toWin = cardNumber / 2
/*querySelector for game format based on cardNumber*/
const gameCards = document.querySelector(".game");
gameCards.classList.add("cards-" + cardNumber)
/*implementing card pairs on a array*/
let cards = []
for (let i = 1; i <= cardNumber / 2; i++) {
    cards.push(i);
    cards.push(i);
}
/*shuffling the cards*/
cards.sort(comparador);
/*[1,3,2,2,1,3] */
/*list with gifs in order */
let gifList = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif",
    "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]

/*showing cards*/
console.log(cards)
const gameDiv = document.querySelector(".game")
for (let i = 1; i <= cardNumber; i++) { 
    gameDiv.innerHTML+=`
    <div class="card" onclick="selectCard(this)">
        <img src="media/back.png" alt="ParrotImg">
        <img src="media/${gifList[cards[i-1]-1]}" alt="ParrotGif">
    </div>
    `
    console.log([i,cards[i-1]])
    console.log(gifList[cards[i-1]-1])
}
function comparador() {
    return Math.random() - 0.5;
}
function selectCard(card){
    card.classList.toggle("flip")
}
