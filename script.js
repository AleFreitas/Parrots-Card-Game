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
/*[1,3,2,2,1,3] */
/*list with gifs in order */
let gifList = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif",
"metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"]
console.log(gifList)

/*setting gifs  */
for (let i = 1; i <= cardNumber; i++){
    let gifPosition = cards[i-1]
    let cardGif = gifList[gifPosition-1]
    let img = document.querySelector(".card"+i+" > .card-back > img")
    console.log(cardGif)
    console.log(img.classList)
    img.setAttribute('src',"media/"+cardGif)
}
function comparador(){ 
	return Math.random() - 0.5; 
}
