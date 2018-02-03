function jmgcPatch(x, y) {
  noFill();
  stroke(200);
  rect(x, y, 100, 100);
  
  // Ellipse 
  noStroke();
  fill (200);
  ellipse (x+50, y+50, 30, 30);
  
  // Triangle
  noStroke();
  fill (5, 90, 90);
  triangle(x+30, y+75, x+30, y+20, x+70, y+75);
  
  // Lines
  stroke(200);
  var lines = 3;
  while (lines < 50) {
    line(x+lines, y, x, y+lines);
    lines = lines + 5;
  }
}

background(255);

jmgcPatch(0, 0);
jmgcPatch(width-100, height-100);
