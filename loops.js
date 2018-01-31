// Concentric Circles

function yourPatch(x, y) {
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

yourPatch(0, 0);
yourPatch(width-480, height-480);

// Taller Lines

function yourPatch(x, y) {
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

yourPatch(0, 0);
yourPatch(width-480, height-480);

// Lines: Alternative Code (Counter)

var counter = 10;
while (counter <= width) { 
  line (counter, 10, 10, counter);
  counter = counter + 5;
}

// Paremeters: (x, y, x, y)
// Increments: 5; x1 = y2; y1 = x2

// Vertical Lines

var counter = 20;
while (counter <= width) { 
  line (counter, 20, counter, 100);
  counter = counter + 5;
}

// Horizontal Lines

var counter = 20;
while (counter <= width) { 
  line (20, counter, 100, counter);
  counter = counter + 5;
}
