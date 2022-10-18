let cardNumber = prompt("insira o numero de cartas a serem utilizadas ( deve ser um par entre 4 e 14)")
const gameCards = document.querySelector(".game");
console.log(gameCards.classList)
gameCards.classList.add("cards-"+cardNumber)
console.log(gameCards.classList)
for (let i = 1; i <= cardNumber; i++){
    let hiddenCard = document.querySelector(".card.hidden");
    hiddenCard.classList.remove("hidden");
}
