let player;

class Deck{
  constructor(){
    this.deck = [];
    this.reset();
    this.shuffle();
    player = true; //player1 = true
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
document.addEventListener("DOMContentLoaded", function(){
document.getElementById('end-turn').addEventListener('click',() =>{
    document.getElementById("images").innerHTML = ""
    document.getElementById("next-player").disabled = false
    document.getElementById("end-turn").disabled = true
    if(player)
      player = false
    else
      player = true

    enableButtons()
  });
  document.getElementById('next-player').addEventListener('click',() =>{
    drawCards(p1_cards, p2_cards, player)
    document.getElementById("next-player").disabled = true
    document.getElementById("end-turn").disabled = false
  });
  document.getElementById('1').addEventListener('click',() =>{
    checkOtherDeck("ace", p1_cards, p2_cards, player);
  });
  document.getElementById('2').addEventListener('click',() =>{
    checkOtherDeck("2", p1_cards, p2_cards, player);
  });
  document.getElementById('3').addEventListener('click',() =>{
    checkOtherDeck("3", p1_cards, p2_cards, player);
  });
  document.getElementById('4').addEventListener('click',() =>{
    checkOtherDeck("4", p1_cards, p2_cards, player);
  });
  document.getElementById('5').addEventListener('click',() =>{
    checkOtherDeck("5", p1_cards, p2_cards, player);
  });
  document.getElementById('6').addEventListener('click',() =>{
    checkOtherDeck("6", p1_cards, p2_cards, player);
  });
  document.getElementById('7').addEventListener('click',() =>{
    checkOtherDeck("7", p1_cards, p2_cards, player);
  });
  document.getElementById('8').addEventListener('click',() =>{
    checkOtherDeck("8", p1_cards, p2_cards, player);
  });
  document.getElementById('9').addEventListener('click',() =>{
    checkOtherDeck("9", p1_cards, p2_cards, player);
  });
  document.getElementById('10').addEventListener('click',() =>{
    checkOtherDeck("10", p1_cards, p2_cards, player);
  });
  document.getElementById('11').addEventListener('click',() =>{
    checkOtherDeck("jack", p1_cards, p2_cards, player);
  });
  document.getElementById('12').addEventListener('click',() =>{
    checkOtherDeck("queen", p1_cards, p2_cards, player);
  });
  document.getElementById('13').addEventListener('click',() =>{
    checkOtherDeck("king", p1_cards, p2_cards, player);
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
  document.getElementById("next-player").disabled = true
}

function drawCards(p1_cards, p2_cards, player){
  if(player)
  {
    str = ""
    for(let x = 0; x < p1_cards.length; x++)
    {
      str += '<img src="' + p1_cards[x] + '">'
    }
    document.getElementById("images").innerHTML += str
    document.getElementById("display-player").innerHTML = "Player: " + 1
  }
  else
  {
    str = ""
    for(let x = 0; x < p2_cards.length; x++)
    {
      str += "<img src=\"" + p2_cards[x] + "\">"
    }
    document.getElementById("images").innerHTML += str
    document.getElementById("display-player").innerHTML ="Player: " + 2
  }
}

  function checkOtherDeck(card, p1, p2, player)//not taking right cards out?
  {
    let found = []
    if(player == true)
    {
      for(var c = 0; c < p2.length; c++)
      {
        if(p2[c].includes(card))
        {
          found.push(p2_cards.pop(c))
        }
        else
        {
          disableButtons()
        }
      }
      found.push.apply(p1_cards, found)
    }
    else if(player == false)
    {
      for(var c = 0; c < p1.length; c++)
      {
        if(p1[c].includes(card))
        {
          found.push(p1_cards.pop(c))
        }
        else
        {
          disableButtons()
        }
      }
      found.push.apply(p2_cards, found)
    }
  }

  function disableButtons()
  {
    for(var x = 1; x < 14; x++)
    {
      document.getElementById(""+x).disabled = true
    }
  }
  function enableButtons()
  {
    for(var x = 1; x < 14; x++)
    {
      document.getElementById(""+x).disabled = false
    }
  }
