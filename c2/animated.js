let cloudOneX = 50;
let lineXone = 0;
let lineYone = 0;

let img;  // Declare a variable to hold the image

function preload() {
  // Preload the image using p5.js loadImage function
  img = loadImage('mazu3.png');  // Make sure the path is correct
}

function setup() {
  let cnv = createCanvas(400, 400);//cnv= copy number variation
  cnv.id('myCanvas');  // Set the ID of the canvas
  frameRate(15);  // Speed of animation
}

function draw() { 
  background("navy");

  // Shooting star
  stroke("yellow");
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);
  
  // Moon
  fill("yellow");
  stroke(0);
  circle(350, 50, 100);
  
  // Overlap navy circle for crescent moon
  stroke("navy");
  fill("navy");
  circle(320, 50, 100);
  
  // Big mountains
  stroke(0);
  fill(0, 102, 204);
  triangle(-40, 300, 75, 100, 250, 300);
  triangle(100, 300, 300, 100, 500, 300);
  
  // Grass
  fill("rgb(64, 64, 64)");
  rect(0, 300, 400, 100);
  
  // Clouds
  fill(255);
  ellipse(cloudOneX, 50, 80, 40);
  ellipse(cloudOneX - 40, 100, 60, 20);
  ellipse(cloudOneX + 20, 150, 40, 10);
  
  // Growing tree
  // Trunk
  fill("rgb(118, 80, 72)");
  rect(40, 270, 15, 50);
  
  fill("rgb(118, 80, 72)");
  rect(340, 330, 15, 50);
  
  // Leaves
  fill("lightgreen");
  triangle(325, 330, 345, 240 - frameCount % 290, 370, 330);
  
  fill("lightgreen");
  triangle(25, 270, 45, 240 - frameCount % 290, 70, 270);
  
  // Display mouse coordinates
  fill(255);  // White text
  text(`${mouseX}, ${mouseY}`, 20, 20);
  
  // Reset cloud at the left edge
  cloudOneX = frameCount % width;

  // Set shooting star to random location
  lineXone = random(0, width);
  lineYone = random(0, height / 2);
  
  // Draw the image on the canvas
  image(img, 55, 85, 195, 267);  // first 2 numbers are position, last 2 numbers are sizes
}
