function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
background(255);
		
line(200, 400, 200, 0);
	strokeWeight(20);
line(0, 200, 400, 200);
	strokeWeight(20);

// Border
strokeWeight(30);

line(0, 400, 0, 0);
line(400, 0, 0, 0);
line(400, 0, 400, 400);
line(0, 400, 400, 400);

// Vertical Lines
strokeWeight(20);
	
line(50, 200, 50, 0);
line(100, 200, 100, 0);
line(150, 200, 150, 0);

// Horizontal Lines
strokeWeight(20);
	
line(400, 50, 200, 50);
line(400, 100, 200, 100);
line(400, 150, 200, 150);

// Diagonal Lines
strokeWeight(20);
	
line(0, 400, 200, 200);
line(0, 330, 130, 200);
line(0, 260, 60, 200);
line(0, 470, 270, 200);
line(0, 540, 340, 200);

// Diagonal Lines
strokeWeight(20);
	
line(400, 400, 200, 200);
line(470, 400, 270, 200);
line(540, 400, 340, 200);
line(330, 400, 130, 200);
line(260, 400, 60, 200);
}

function draw() { 

background(255);
stroke('black');

// Vertical Lines
strokeWeight(20);
stroke('black');

line(50, 200, 50, 0);
line(100, 200, 100, 0);
line(150, 200, 150, 0);

// Horizontal Lines
strokeWeight(20);
stroke('yellow');
line(400, 50, 200, 50);
line(400, 100, 200, 100);
line(400, 150, 200, 150);

// Diagonal Lines
strokeWeight(20);
stroke('red');

line(0, 400, 200, 200);
line(0, 330, 130, 200);
line(0, 260, 60, 200);
line(0, 470, 270, 200);
line(0, 540, 340, 200);

// Diagonal Lines
strokeWeight(20);
stroke('blue');

line(400, 400, 200, 200);
line(470, 400, 270, 200);
line(540, 400, 340, 200);
line(330, 400, 130, 200);
line(260, 400, 60, 200);

stroke('black');
line(200, 400, 200, 0);
strokeWeight(20);
line(0, 200, 400, 200);
strokeWeight(20);

// Border
strokeWeight(30);
stroke('black');
	
line(0, 400, 0, 0);
line(400, 0, 0, 0);
line(400, 0, 400, 400);
line(0, 400, 400, 400);

}
