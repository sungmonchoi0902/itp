function setup() {
  createCanvas(400, 400);
  noStroke();
}

function drawObject(x, y, s) {
    push();
    translate(x, y);
    scale(s);

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
  pop();
}

function draw() {
  for (let x = 0; x < width; x += width/10) {
    for (let y = 0; y < height; y += height /10) {
      drawObject(x, y, 0.28);
    }
  }
}