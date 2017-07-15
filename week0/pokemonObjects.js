// WEEK 0 TOPIC: Objects
// WEEK O PROJECT: POKEMON OBJECTS
var pokemonRoster = [
  {
    name: 'Typloshion',
    type: 'fire',
    hp: 89,
    atk: 84,
    def: 78,
    legend: false
  },
  {
    name: 'Quilava',
    type: 'fire',
    hp: 58,
    atk: 64,
    def: 58,
    legend: false
  },
  {
    name: 'Cyndaquil',
    type: 'fire',
    hp: 39,
    atk: 52,
    def: 43,
    legend: true
  }
]

// Prints Roster
function printRoster(rosterArray){
  for (var i = 0; i < rosterArray.length; i++) {
  console.log(rosterArray[i]);
}
}
printRoster(pokemonRoster);

// Subtracts HP from each object
function pokemonAttack(rosterArray){
  for (var i = 0; i < rosterArray.length; i++) {
    rosterArray[i].hp = RosterArray[i].hp - 10;
  }
  printRoster(rosterArray);
}
pokemonAttack(pokemonRoster);
