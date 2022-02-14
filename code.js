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
    const values = ['_ace_1.png', '_2.png', '_3.png', '_4.png', '_5.png', '_6.png', '_7.png', '_8.png', '_9.png', '_10.png', '_jack_11.png', '_queen_12.png', '_king_13.png'];

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

  getDeck()
  {
    return this.deck
  }
}
let p1_cards = []
let p2_cards = []
let p1books = 0
let p2books = 0
let deck1 = new Deck()

document.addEventListener("DOMContentLoaded", function(){
document.getElementById('end-turn').addEventListener('click',() =>{
    document.getElementById("images").innerHTML = ""
    document.getElementById("next-player").disabled = false
    document.getElementById("end-turn").disabled = true
    if(player)
      player = false
    else
      player = true
  });
  document.getElementById('next-player').addEventListener('click',() =>{
    drawCards(p1_cards, p2_cards, player)
    document.getElementById("next-player").disabled = true
    document.getElementById("end-turn").disabled = false
    enableButtons()
  });
  document.getElementById('1').addEventListener('click',() =>{
    checkOtherDeck("1", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('2').addEventListener('click',() =>{
    checkOtherDeck("2", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('3').addEventListener('click',() =>{
    checkOtherDeck("3", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('4').addEventListener('click',() =>{
    checkOtherDeck("4", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('5').addEventListener('click',() =>{
    checkOtherDeck("5", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('6').addEventListener('click',() =>{
    checkOtherDeck("6", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('7').addEventListener('click',() =>{
    checkOtherDeck("7", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('8').addEventListener('click',() =>{
    checkOtherDeck("8", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('9').addEventListener('click',() =>{
    checkOtherDeck("9", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('10').addEventListener('click',() =>{
    checkOtherDeck("10", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('11').addEventListener('click',() =>{
    checkOtherDeck("11", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('12').addEventListener('click',() =>{
    checkOtherDeck("12", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
  document.getElementById('13').addEventListener('click',() =>{
    checkOtherDeck("13", p1_cards, p2_cards, player);
    checkForFour(player)
    writeInfo()
  });
gameStart()
});

function gameStart(){  
  for(let i = 0; i < 7; i++){
      p1_cards[i]=deck1.deal();
  }
  for(let i = 0; i < 7; i++){
      p2_cards[i]=deck1.deal();
  }
  drawCards(p1_cards, p2_cards, player)
  document.getElementById('num-cards-p1').innerHTML = "Player 1 # of Cards: " + p1_cards.length
  document.getElementById('num-cards-p2').innerHTML = "Player 2 # of Cards: " + p2_cards.length
  document.getElementById('deck').innerHTML = "Cards left in Deck: " + deck1.getDeck().length
  document.getElementById("next-player").disabled = true
}

function drawCards(p1_cards, p2_cards, player){
  document.getElementById("images").innerHTML = ""
  if(player)
  {
    str = ""
    for(let x = 0; x < p1_cards.length; x++)
    {
      str += '<img src="' + p1_cards[x] + '">'
    }
    document.getElementById("images").innerHTML += str
    document.getElementById("display-player").innerHTML = "Current Player: " + 1
  }
  else
  {
    str = ""
    for(let x = 0; x < p2_cards.length; x++)
    {
      str += "<img src=\"" + p2_cards[x] + "\">"
    }
    document.getElementById("images").innerHTML += str
    document.getElementById("display-player").innerHTML ="Current Player: " + 2
  }
}

  function checkOtherDeck(card, p1, p2, player)
  {
    let found = []
    var correct = false
    var has = false
    let positions = []

    if(player == true)
    {
      for(var p = 0; p < p1.length; p++)
      {
        if(p1_cards[p].includes("_"+card+".png"))
          has = true
      }
      if(has)
      {
        for(var c = 0; c < p2.length; c++)
        {
          if(p2[c].includes("_"+card+".png"))
          {
            positions.push(c)
            found.push(p2_cards[c])
            correct = true
          }
        }
        positions = positions.reverse()
        for(var eh = 0; eh < positions.length; eh++)
        {
          p2_cards.splice(positions[eh], 1)
        }
        found.push.apply(p1_cards, found)
      }
      else
        alert("Cannot guess a card that you do not have! Guess again!")
    }
    else if(player == false)
    {
      for(var p = 0; p < p2.length; p++)
      {
        if(p2_cards[p].includes("_"+card+".png"))
          has = true
      }
      if(has)
      {
        for(var c = 0; c < p1.length; c++)
        {
          if(p1[c].includes("_"+card+".png"))
          {
            positions.push(c)
            found.push(p1_cards[c])
            correct = true
          }
        }
        positions = positions.reverse()
        for(var eh = 0; eh < positions.length; eh++)
        {
          p1_cards.splice(positions[eh], 1)
        }
        found.push.apply(p2_cards, found)
      }
      else
        alert("Cannot guess a card that you do not have! Guess again!")
    }
    if(has == true)
    {
      if(correct == false)
      {
        disableButtons()
        if(player == true)
          p1_cards.push(deck1.deal())
        else
          p2_cards.push(deck1.deal())
      }
      drawCards(p1_cards, p2_cards, player)
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

  function checkForFour(player)
  {
    var player_cards
    var completedBooks
    if(player == true)
      player_cards = p1_cards
    else
      player_cards = p2_cards

    document.getElementById('books-got').innerHTML = "Books Gotten: "
    for(var i=1;i<14;i++)
    {
      completedBooks = []
      for(var j=0;j<player_cards.length;j++)
      {
        if(player_cards[j].includes("_" + i +".png"))
        {
          completedBooks.push(j)
        }
      }
      completedBooks = completedBooks.reverse()
      if(completedBooks.length == 4)
      {
        if(player==true)
        {
          p1books += 1
          document.getElementById("p1books").innerHTML = "Player 1 Books: " + p1books
          for(var c = 0; c < completedBooks.length; c++)
          {
            p1_cards.splice(completedBooks[c], 1)
          }
          if(i == 1)
            document.getElementById('books-got').innerHTML += "All Aces gotten."
          else if(i == 11)
            document.getElementById('books-got').innerHTML += "All Jacks gotten." 
          else if(i == 12)
            document.getElementById('books-got').innerHTML += "All Queens gotten."
          else if(i == 13)
            document.getElementById('books-got').innerHTML += "All Kings gotten. "
          else
            document.getElementById('books-got').innerHTML += "All " + i + "s gotten."
        }
        else
        {
          p2books += 1
          document.getElementById("p2books").innerHTML = "Player 2 Books: " + p2books
          for(var c = 0; c < completedBooks.length; c++)
          {
            p2_cards.splice(completedBooks[c], 1)
          }
          if(i == 1)
            document.getElementById('books-got').innerHTML += "All Aces gotten."
          else if(i == 11)
            document.getElementById('books-got').innerHTML += "All Jacks gotten." 
          else if(i == 12)
            document.getElementById('books-got').innerHTML += "All Queens gotten."
          else if(i == 13)
            document.getElementById('books-got').innerHTML += "All Kings gotten. "
          else
            document.getElementById('books-got').innerHTML += "All " + i + "s gotten."
        }
      }
    }
    drawCards(p1_cards, p2_cards, player)
    
    if(p1_cards.length == 0)
    {
      p2books += 13-p1books-p2books
      document.getElementById("p2books").innerHTML = "Player 2 Books: " + p2books
      checkWin()
    }
    else if(p2_cards.length == 0)
    {

      p1books += 13-p2books-p1books
      document.getElementById("p1books").innerHTML = "Player 1 Books: " + p1books
      checkWin()
    }
  }
  
  function writeInfo()
  {
    document.getElementById('num-cards-p1').innerHTML = "Player 1 # of Cards: " + p1_cards.length
    document.getElementById('num-cards-p2').innerHTML = "Player 2 # of Cards: " + p2_cards.length
    document.getElementById('deck').innerHTML = "Cards left in Deck: " + deck1.getDeck().length
  }

  function checkWin()
  {
    if(p1books > p2books)
      alert("Player 1 Wins!")
    else if(p1books < p2books)
      alert("Player 2 Wins!")
  }
