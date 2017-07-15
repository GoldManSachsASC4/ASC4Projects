// WEEK 0 TOPIC: OBJECTS
// WEEK 0 CODE ALONG: Superhero
function Superhero(name, ability, gender, archEnemy){
    this.name = name;
    this.ability = ability;
    this.gender = gender;
    this.archEnemy = archEnemy;


    this.talk = function(){
        console.log("I am " + name + "!")

    }
}


var robinHood = new Superhero("Robinhood", "Saving the World", "Male", "Joker");

robinHood.talk();