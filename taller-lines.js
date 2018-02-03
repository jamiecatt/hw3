// Taller Lines

function jmgcPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 480, 480);
  
for (var i = 20; i <= 400; i = i + 10) {
  var startX = 20;
  var startY = i;
  var endX = i + 20;
  var endY = i;
  line(startX, startY, endX, endY);
  
}
}

background(255);

jmgcPatch(0, 0);
jmgcPatch(width-480, height-480);
