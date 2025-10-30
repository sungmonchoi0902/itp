function setup() {
  createCanvas(150, 150);
  noStroke();
}

function draw() {
	fill("#2A1255");
    circle(75, 75, 100);
  
    fill("red");
    circle(75, 75, 85);
  
    fill("yellow");
    circle(75, 75, 70);
  
    fill(0);
    circle(75, 75, 55);
  
    fill("#2A1255");
    arc(75, 75, 55, 55, PI/1.5, -HALF_PI);
  
    fill("rgb(126,91,2)");
    arc(75, 75, 55, 55, -HALF_PI, HALF_PI/1.5);
  
    fill(0);
    triangle(62, 98.5, 75, 47.5, 89, 98.5);
}