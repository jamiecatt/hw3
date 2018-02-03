function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
		noStroke ();
  }
}

function keyPressed() {
  print(key);
  
  // Colors
  
  if (key == 'R') {
    fill(255, 155,80);
  } else if (key == 'G') {
    fill(230, 230, 250);
  } else if (key == 'B') {
    fill(75, 0, 135); 
  }
	else if (key == 'H') {
    fill(128, 0, 0); 
  }
	else if (key == 'S') {
    fill(45, 80, 80); 
  }
	else if (key == 'L') {
    fill(255, 220, 185); 
  }
	
  // Diameter
  
	else if (key == '1') {
    diameter = 25; 
  }
		else if (key == '2') {
    diameter = 50; 
  }
	else if (key == '3') {
    diameter = 75; 
  }
}
