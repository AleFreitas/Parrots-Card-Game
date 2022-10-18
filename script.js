/*prompt for card number */
let cardNumber = prompt("insira o numero de cartas a serem utilizadas ( deve ser um par entre 4 e 14)")
/*querySelector for game format based on cardNumber*/
const gameCards = document.querySelector(".game");
gameCards.classList.add("cards-"+cardNumber)
/*showing cards based on cardNumber*/
let cards = []
for (let i = 1; i <= cardNumber; i++){
    let hiddenCard = document.querySelector(".card.hidden");
    hiddenCard.classList.remove("hidden");
}
/*implementing card pairs on a array*/
for (let i = 1; i <= cardNumber/2; i++){
    cards.push(i);
    cards.push(i);
}
/*shuffling the cards*/
cards.sort(comparador);

console.log(cards)

function comparador() { 
	return Math.random() - 0.5; 
}