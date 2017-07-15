// WEEK 0 TOPIC: CONDITIONALS
// WEEK 0 CODE-ALONG: RPS/Rock Paper Scissors

// USER selects PAPER
var userChoice = 'p';

//compute selects a random choice out of  rock paper scissors
var choices = ['r','p','s'];
var cpuChoice = choices[Math.floor(Math.random()*3)];

//if the user and computer select the same choice: it's a tie
if (userChoice == cpuChoice){
  console.log("It's a tie!");
}

//player picks rock and computer picks paper
if (userChoice == 'r' && cpuChoice == 'p'){
  console.log('Rock loses to paper. You lose!');
}
//player picks rock and computer picks scissor
if (userChoice == 'r' && cpuChoice == 's'){
  console.log('Rock beats scissor. You win!');
}

//player picks paper and computer picks rock
if (userChoice == 'p' && cpuChoice == 'r'){
  console.log('Paper beats rock. You win!');
}
//player picks paper and computer picks scissor
if (userChoice == 'p' && cpuChoice == 's'){
  console.log('Paper loses to scissor. You lose!');
}

//player picks scissor and computer picks paper
if (userChoice == 's' && cpuChoice == 'p'){
  console.log('Scissor beats paper. You win!');
}
//player picks scissor and computer picks rock
if (userhoice == 's' && cpuChoice == 'r'){
  console.log('Scissor loses to rock. You lose!');
}

