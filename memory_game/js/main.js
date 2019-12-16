

 cards = [
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
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}


function flipCard(){
cardID = this.getAttribute('data-id')
console.log(cardID)
cardsInPlay.push(cards[cardID].card)
this.setAttribute('src', cards[cardID.cardImage])

if (cardsInPlay.length === 2) {
checkForMatch();
cardsInPlay = [];
}
}

var createBoard = function() {
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');

    cardElement.setAttribute("src" , "images/back.png" , "data-id", cards[i]);
    cardElement.addEventListener("click", flipCard );


    document.getElementById('game-board').appendChild(cardElement);
  }
}







createBoard();
