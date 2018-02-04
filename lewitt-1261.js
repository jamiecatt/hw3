function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
// Concentric Circles

function jmgcPatch(x, y) {
  noFill();
  stroke(255);
	strokeWeight(6);
  rect(x, y, 480, 480);
  
for (var i = 5; i <= 450; i = i + 60) {
  
  // X, Y Coordinate On Canvas
  
  var startX = 200;
  var startY = 200;
  
  // Changes Shape Size
  var endX = i;
  var endY = i;
  ellipse(startX, startY, endX, endY);
}}

background(0);

jmgcPatch(0, 0);
jmgcPatch(width-480, height-480);

}
