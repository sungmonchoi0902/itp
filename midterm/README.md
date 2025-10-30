#Midterm Worklog

##Phase1

- First, I decided to recreate my military insignia as my project. I used my iPad to sketch the design.

![work](reference/work.PNG)

##Phase2

- First, I created a 150x150 canvas and used noStroke(); to remove the outlines of the shapes.

`
function setup() {
  createCanvas(150, 150);
  noStroke();
}
`

- Then, I used the function draw() to display the graphics. Since I wanted to use circles, I used the fill() function to add color and the circle() function to draw them. I placed three circles with different colors in the center (x=75, y=75) and adjusted their diameters to fit inside the canvas.

`
  fill ("#2A1255");
  circle(75, 75, 100);
  fill ("red")
  circle(75, 75, 85);
  fill ("yellow")
  circle(75, 75, 70);
  fill (0)
  circle(75, 75, 55);
`

- The problem was the shapes inside the smallest circle. I wanted to add purple and brown half-circles on top of the black circle, but I failed to make them look like the reference image. I even studied radians and tried to fix the coordinates using the arc() function, but it still didn’t work.

`
  fill ("#2A1255");
  arc(75, 75, 55, 55, PI, -HALF_PI);
  fill ("rgb(126,91,2)")
  arc(75, 75, 55, 55, -HALF_PI, 0);
`

![fail](reference/fail.PNG)
![radian](reference/radian.JPEG)


- So I tried another idea instead of filling the background circle, I thought about drawing two half-circles on both sides and then adding a fan shape on top. However, I couldn’t find any proper reference for drawing a sector shape.

![half](reference/half.PNG)

- Eventually, I decided to combine a triangle and a half-circle to make a similar fan shape. I wrote the following code and it looked somewhat similar.

`
  fill(0);
  arc(75, 90, 44, 24, 0, PI);
  triangle(53, 90, 75, 48, 97, 90);
`

![nicetry](reference/nicetry.PNG)

- But as you can see, the bottom part was sticking out. Even after adjusting the coordinates, I couldn’t make it fit perfectly inside the circle. Then I realized that I could use mathematical expressions inside the shape coordinates. After trying that, I successfully created the fan shape.

![sector](reference/sector.PNG)
![success](reference/success.PNG)

`
  fill ("#2A1255");
  arc(75, 75, 55, 55, PI/1.5, -HALF_PI)
  fill ("rgb(126,91,2)");
  arc(75, 75, 55, 55, -HALF_PI, HALF_PI/1.5)
  fill (0)
  triangle(62, 98.5, 75, 47.5, 89, 98.5);
`

##Phase3

- I referred to the example code provided in the GitHub guide. I used the function drawObject(x, y, s) to control the position and scale of the object. To save the current graphic state, I used push(), and to restore it, I used pop().

`
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
`

- Then, I used the draw() function to display two objects. One at the original position and another scaled and moved to a different location.

`
function draw() {
  drawObject(0, 0, 1);
  drawObject(200, 200, 1.5);
}
`

##Phase4

- The hint said to use a for loop, so I searched for examples on the p5.js website and found a few useful references.

![for](reference/for.JPEG)

- I set the starting point of the loop to 0 using let x = 0;. Then I made the loop continue until it reaches the edge of the canvas with x < width. Since I used a 10x10 grid, I increased x by width / 10 each time. I used the same method for the y value.

`
function draw() {
  for (let x = 0; x < width; x += width/10) {
    for (let y = 0; y < height; y += height /10) {
`

- Finally, I used drawObject(x, y, 0.28); to draw each object within the grid cells.