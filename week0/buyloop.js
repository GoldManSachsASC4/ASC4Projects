var prompt = require("prompt-sync")();

var money = 1000;
var louisVuittonDuffleBag = [];

while(money>=100){
    console.log("You have $" + money + " availalble. Yeezy's are $400, Gucci Flip Flops $200, and Ray Bans $100");
    var answer = prompt("What would you like to cop?");
    
    if(answer.toLowerCase() == "yeezys" && money >=500){
        money-= 400;
        louisVuittonDuffleBag.push("yeezys");
        console.log("You've copped some yeezy's!")
    }
    else if(answer.toLowerCase() == "gucci flip flops" && money>=300){
        money-= 200;
        louisVuitton.push("gucci flip flops");
        console.log("You've copped some Gucci Flip Flops!");
    }
    else if(answer.toLowerCase() == "ray bans" && money>= 200){
        money -+ 100;
        items.push("ray bans");
        console.log("You've copped some ray bans!");

    }
    else{
        console.log("You cannot purchase this item at the moment.");

    }


}
