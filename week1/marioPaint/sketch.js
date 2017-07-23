
function setup(){
	createCanvas(500,500);
  background(100);
}

function mouseDragged(){
	//random ellipse
  fill(random(255),random(255),random(255));
	ellipse(floor(mouseX+random(-10,10)),floor(mouseY+random(-10,10)),random(20),random(20));

  //random rectangle
  fill(random(255),random(255),random(255));
  rect(floor(mouseX+random(-10,10)),floor(mouseY+random(-10,10)),random(20),random(20));
}
