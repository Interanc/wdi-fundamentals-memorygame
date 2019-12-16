

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You Found A Match!");
  } else {
    console.log("Sorry,try again")
  }
}
function flipCard(cardID){
cardsInPlay.push(cards[cardID])

console.log("The card you flipped over is " + cards[cardID])

}
flipCard(0);
flipCard(2);
checkForMatch();
