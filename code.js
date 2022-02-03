class Deck{
  constructor(){
    this.deck = [];
    this.reset();
    this.shuffle();
  }

  reset(){
    this.deck = [];

    const suits = ['hearts', 'spades', 'clubs', 'diamonds'];
    const values = ['_ace.png', '_2.png', '_3.png', '_4.png', '_5.png', '_6.png', '_7.png', '_8.png', '_9.png', '_10.png', '_jack.png', '_queen.png', '_king.png'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${suits[suit]}${values[value]}`);
      }
    }
  }

  shuffle(){
    const { deck } = this;
    let m = deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal(){
    return this.deck.pop();
  }
}

document.addEventListener("DOMContentLoaded", function(){
document.getElementById('end-turn').addEventListener('click',() =>{
  window.location.href = 'bufferpage.html'
});
gameStart()
});

function gameStart(){
  var deck1 = new Deck();
  let p1_cards = []
  let p2_cards = []
  let player = 1
  
  for(let i = 0; i < 7; i++){
      p1_cards[i]=deck1.deal();
  }
  for(let i = 0; i < 7; i++){
      p2_cards[i]=deck1.deal();
  }
  drawCards(p1_cards, p2_cards, player)
}

function drawCards(p1_cards, p2_cards, player){
  if(player == 1)
  {
    str = ""
    for(let x = 0; x < p1_cards.length; x++)
    {
      str += '<img src="' + p1_cards[x] + '">'
    }
    document.getElementById("images").innerHTML += str
  }
  else
  {
    str = ""
    for(let x = 0; x < p2_cards.length; x++)
    {
      str += "<img src=\"" + p2_cards[x] + "\">"
    }
    document.getElementById("images").innerHTML += str
  }
}
