// Concentric Circles

function jmgcPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 480, 480);
  
for (var i = 100; i <= 400; i = i + 5) {
  
  // X, Y Coordinate On Canvas
  
  var startX = 200;
  var startY = 200;
  
  // Changes Shape Size
  var endX = i;
  var endY = i;
  ellipse(startX, startY, endX, endY);
}}

background(255);

jmgcPatch(0, 0);
jmgcPatch(width-480, height-480);
