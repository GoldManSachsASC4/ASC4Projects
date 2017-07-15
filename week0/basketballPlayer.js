// WEEK 0 TOPIC: OBJECTS
// WEEK 0 CODE ALONG: Basketball Player
function BasketballPlayer(name, height,team,number,pastTeams){
    this.name = name;
    this.height = height;
    this.team = team;
    this.number = number;
    this.pastTeams = pastTeams;

    this.dunk = function(){
        console.log(name + " has just dunked the ball!");
    }

    this.changeTeam = function(newTeam){
        pastTeams.push(team)
        this.team = newTeam;
    }
}

var lebron = new BasketballPlayer("Lebron James", "6'2", "Cavs", "23", ['Miami Heat']);

lebron.changeTeam("Warriors");
console.log(lebron);

