

var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

var cardsInPlay = [];
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You Found A Match!");
    alert("You Found A Match!");
  } else {
    console.log("Sorry,try again")
    alert("Sorry, try again")
  }
}
function flipCard(cardID){
cardsInPlay.push(cards[cardID].rank)

console.log("The card you flipped over is " + cards[cardID].rank)
console.log(cards[cardID].cardImage)
console.log(cards[cardID].suit)
}
flipCard(0);
flipCard(2);
checkForMatch();
