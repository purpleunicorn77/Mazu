let img;  // Declare a variable to hold the image

function preload() {
  // Preload the image using p5.js loadImage function
  img = loadImage('mazu4.png');  // Make sure the path is correct
}

function setup() {
  //creates a canvas 600 pixels wide
  //and 400 pixels high
  let cnv = createCanvas(400, 400);
  cnv.id('myCanvas');
}
function draw() {
  //sky blue background
  background(0, 0, 255);
  
  //sun in top-right corner
  fill("yellow");
  circle(280, 50, 70);
 
  //grass on bottom half
  fill("green");
  rect(0, 200, 400, 200);

  //mountain
  fill("Lightgreen");
  stroke(0);
  strokeWeight(1);
  triangle(50, 220, 78, 160, 106, 220); // Adjust
 
 // Set size and display text1
 textSize(35); // Set text size for Qianliyan and Shunfeng'er
 text("🧟", 47, 240);  // Qianliyan
 text("👹", 85, 240); // Shuenfeng'er
 
 // Set size and display text2
 textSize(50); // Set text size for Magic symbol
 text("⚡️", mouseX, mouseY);  // Magic, follows mouse

image(img, 110, 120, 95, 150); 
}