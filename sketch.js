
var x = 100;
var y = 400;

function setup() {
 function windowResized() {
 	resizeCanvas(windowWidth-20,600);}
  createCanvas(windowWidth-20,600);
  strokeWeight(4);
   circleX=0;
background(28,28,28);
}
 	
function draw() {
	
 stroke(0);
  fill(255);
  ellipse(mouseX,mouseY,64,64);
  fill(255);
  ellipse(mouseY,mouseX,64,64);
fill(0);
stroke(185,76,225);
line(mouseX,mouseY,0,0);
stroke(23,238,236);
line(mouseY,mouseX,0,0);

 if(mouseIsPressed){
 stroke(225,0,0);
line(mouseX,mouseY,0,0);
stroke(255,255,153);
line(mouseY,mouseX,0,0);
	
 }
}







