var letters = [];
var speed = 3; //3 pixels moved per draw loop
var maxLetters = 10; //limit on number of letters out at one time
var spawnCounter = 20; //number of times draw() loop occurs before next letter spawns
var counter; //used as main counter
var points = 0;

function setup(){
 createCanvas(800,400);
 counter = spawnCounter;
}

function draw(){
	background(155,155,45);
	stroke("black");
  textAlign(CENTER);
  textFont("Georgia");
  textSize(30);
  text("Type the letters before they hit the wall!",width/2, 50);

  text("Points : " + points,width/2, height-20); //NOTE: width and height are global variables set by p5.js

  //spawning letters on a "timer"
  if(counter>0){
  	counter--;
  }else{
  	counter = spawnCounter;
    //only spawns letters if space available in letters array
    if(letters.length<maxLetters){
    	letters.push(new Letter());
    }
  }

  //draws all letters in array
  for(var i = 0; i < letters.length; i++){
    if(letters[i].x>=width){
    	letters.splice(i,1);//removes specific item from array if it reaches edge
      points--;//lose a point!
    }else{
    	letters[i].moveAndShow();
    }

  }
}

//will use Letter objects to keep track of individual moving letters
function Letter(){
	this.x = 0;
  this.y = random(100,height-40);

  //creates an array of single letters (from the .split) and returns a random letter from the array
  this.text = random("abcdefghijklmnopqrstuvwxyz".split(""));
  this.moveAndShow=function(){
  	this.x += speed;
    text(this.text,this.x, this.y);
  }
}

function keyTyped(){
	//Only checks if FIRST item in the letters array is typed
  if(key == letters[0].text){
  	letters.splice(0,1);
    points++;//earn points!
  }else{
    points--;//lose points!
  }
  return false;
}
