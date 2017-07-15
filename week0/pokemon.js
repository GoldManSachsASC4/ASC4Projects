// WEEK 0: Functions
// WEEK 0: Pokemon Functions


function rand(num){
  //returns and random number between 0 and num
  return Math.floor(Math.random()*num);
}

function randLetter(){
  //returns a random letter
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  return letters[rand(letters.length)];
}

function randWord(){
  //returns a word of random length between 1 and 15
  var word = '';
  var length = 1 + rand(15);
  for (var i = 0; i < length; i++){
    word = word + randLetter();
  }
  return word;
}

function randSentence(){
  //returns a sentence with a random number of between 1 to 10 words
  var sentence = randWord();
  var length = rand(10);
  for (var i = 0; i < length; i++){
    sentence = sentence + " " + randWord();
  }
  
  return sentence[0].toUpperCase() + sentence.slice(1,sentence.length) + ".";
}

function pokeAttack(poke1, poke2){
  //takes 2 pokemon arrays and subrtacts attack of poke1 from health of poke2
  poke2[2] -= poke1[1];
  return poke2;
}

// var firstPokemon = ["Pikachu", 23, 100] ;
// var secondPokemon = ["Charizard", 50, 200];

// pokeAttack(firstPokemon, secondPokemon);
// //=> ["Charizard", 50, 177];
