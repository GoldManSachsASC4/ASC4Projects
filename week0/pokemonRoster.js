// WEEK 0 TOPIC: NESTED ARRAYS
// WEEK 0 PROJECT: POKEMON ROSTER

var pokemonRoster = [
    ["Typlhosion", "fire",89,84,78,false],
    ["Quilava","fire",58,64,58,false],
    ["Cyndaquil","fire",39,52,43,false]
];


function printRoster(roster){
  for (var i = 0; i < roster.length; i++) {
    for (var j = 0; j < roster[i].length; j++){
      console.log(roster[i][j]);
    }
    console.log("------------");
  }
}

printRoster(pokemonRoster);

