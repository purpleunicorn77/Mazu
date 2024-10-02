let osc, playing, freq, amp;

let img;

function preload() {
  img = loadImage('da.png');
}

function setup() {
  let cnv = createCanvas(580, 420);
  cnv.mousePressed(playOscillator); // Set up mouse interaction to toggle oscillator
  osc = new p5.Oscillator('sine'); // Create a sine wave oscillator
  playing = false; // Start with the oscillator not playing
  cnv.id('myCanvas');
}

function draw() {
  background(255);

  // Map mouseX to frequency (between 100 and 500)
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);

  // Map mouseY to amplitude (between 0 and 1)
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
  
  // Display frequency and amplitude
  text('tap to play', 20, 20);
  text('freq: ' + freq, 20, 40);
  text('amp: ' + amp, 20, 60);

  // Draw the image so it overlaps the oscillator visuals
  image(img, 35, 50, 500, 370);
  
  // If the oscillator is playing, update its frequency and amplitude
  if (playing) {
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }  
}

function playOscillator() {
  // Toggle the oscillator on/off
  if (!playing) {
    osc.start();
    playing = true;
  } else {
    osc.stop();
    playing = false;
  } 
}


//Feedback 1:The issue likely stems from the fact that you are only calling image() inside the playOscillator() function, which is triggered only when the canvas is clicked. Need to move img to draw.
