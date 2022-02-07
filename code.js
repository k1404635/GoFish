class Deck{
  player;
  constructor(){
    this.deck = [];
    this.reset();
    this.shuffle();
    player = 1;
  }
  getPlayer(){
    return player;
  }
  setPlayer(num){
    player=num;
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
let p1_cards = []
  let p2_cards = []
   //not changing player but saving hand rn
document.addEventListener("DOMContentLoaded", function(){
document.getElementById('end-turn').addEventListener('click',() =>{
    document.getElementById("images").innerHTML = ""
  });
  document.getElementById('next-player').addEventListener('click',() =>{
    drawCards(p1_cards, p2_cards, player)
  });
  document.getElementById('ace').addEventListener('click',() =>{
    checkOtherDeck(1);
  });
  document.getElementById('2').addEventListener('click',() =>{
    checkOtherDeck(2);
  });
  document.getElementById('3').addEventListener('click',() =>{
    checkOtherDeck(3);
  });
  document.getElementById('4').addEventListener('click',() =>{
    checkOtherDeck(4);
  });
  document.getElementById('5').addEventListener('click',() =>{
    checkOtherDeck(5);
  });
  document.getElementById('6').addEventListener('click',() =>{
    checkOtherDeck(6);
  });
  document.getElementById('7').addEventListener('click',() =>{
    checkOtherDeck(7);
  });
  document.getElementById('8').addEventListener('click',() =>{
    checkOtherDeck(8);
  });
  document.getElementById('9').addEventListener('click',() =>{
    checkOtherDeck(9);
  });
  document.getElementById('10').addEventListener('click',() =>{
    checkOtherDeck(10);
  });
  document.getElementById('11').addEventListener('click',() =>{
    checkOtherDeck(11);
  });
  document.getElementById('12').addEventListener('click',() =>{
    checkOtherDeck(12);
  });
  document.getElementById('13').addEventListener('click',() =>{
    checkOtherDeck(13);
  });
gameStart()
});

function gameStart(){
  var deck1 = new Deck();
  
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
    document.getElementById("display-player").innerHTML =getPlayer()
    setPlayer(2);
  }
  else
  {
    str = ""
    for(let x = 0; x < p2_cards.length; x++)
    {
      str += "<img src=\"" + p2_cards[x] + "\">"
    }
    document.getElementById("images").innerHTML += str
    document.getElementById("display-player").innerHTML =getPlayer()
    setPlayer(1);
  }
}
