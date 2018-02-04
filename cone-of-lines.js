// Cone of Lines

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
	
	
function jmgcPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 480, 480);
  
for (var i = 20; i <= 400; i = i + 10) {
  var startX = 240;
  var startY = i;
  var endX = 20;
  var endY = 240;
  line(startX, startY, endX, endY);
  
}
}

background(255);

jmgcPatch(0, 0);
jmgcPatch(width-480, height-480);

}


// Lines: Alternative Code (Counter) - Notes In Class

var counter = 10;
while (counter <= width) { 
  line (counter, 10, 10, counter);
  counter = counter + 5;
}

// Parameters: (x, y, x, y)
// Increments: 5; x1 = y2; y1 = x2
