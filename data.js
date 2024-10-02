let stars = [];

function setup() {
  createCanvas(400, 400);
  starPower();
}

function draw() {
  background("black");

  updateAndDrawStars();
  
  textSize(50);
  text("👆🏻", mouseX, mouseY); //Magic
}

function updateAndDrawStars(){
  for (let star of stars){
   
    drawStar(star);
    star.size *= 0.99;
    star.lifespan -=1;
    
    if (star.lifespan <= 0){
      let i = stars.indexOf(star);

      stars.splice(i,1);
    }
  }
}

function starPower(){
  for (let i = 0; i <20; i+= 1){
    let star1 = createStar();
    stars.push(star1);
  }
}

function createStar() {
  let star = {
    x: random(20, 380),
    y: random(20, 380),
    size: random(20, 75),
    lifespan: random(255, 300), 
    color: color(random(255), random(255), random (255))
  };

  return star;
}

function drawStar(star){
  noStroke();
  fill(star.color);
  
  // Translate to stars position and scale it
  push();
  translate(star.x, star.y);
  scale(star.size/ 100);
    
  // Draw vertexs.
    beginShape();
    vertex(100, 47.5); //top point
    vertex(115, 87.5); //right shoulder(clockwise points)
    vertex(150, 87.5); //right top point
    vertex(125, 105); //right hip
    vertex(137.5, 136.5); //right bottom point
    vertex(100, 120); //bottom indent
    vertex(62.5, 136.5); //left bottom point
    vertex(77.5, 105); //left hip
    vertex(50, 87.5); //left top point
    vertex(87.5, 87.5); //left shoulder
    vertex(100, 47.5); //top point. muct match starting point if you want the outline to go around the entire shape.
    endShape();
    
    pop(); //Restore original transformation.
  }
  
  function mousePressed() {
    let star = createStar();
    
    star.x = mouseX;
    star.y = mouseY;
    stars.push(star);
  }
  
  // 1st Feedback: The issue here is that you are creating and drawing stars, but your drawStar() function doesn't make use of the star.x and star.y values when drawing. All stars are being drawn at the same fixed coordinates, which is causing the illusion that only one star is being drawn. The star's size is also not being considered in the drawing.