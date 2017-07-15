// WEEK 0 TOPIC: FUNCTIONS
// WEEK O PROJECTS: Super S(MASH) Brothers
var prompt = require("prompt-sync")();


var mash = ['mansion', 'apartment', 'shack','house']; //standard and MUST be included in MASH
var ansArray0 = ["10","500"]; //starting values user likely won't like!
var ansArray1 = ["Tom","Dick","Harry"];


for ( var i = 0; i < 2; i ++){
  ansArray0.push(prompt("How many kids to you want?"));
  ansArray1.push(prompt("Who do you want to marry?"));
}

var randArray = function(array){
  return array[Math.floor(Math.random()*array.length)];
}

console.log("You will marry " + randArray(ansArray1) + " and will have " + randArray(ansArray0) + " kids and will live in a " + randArray(mash));
