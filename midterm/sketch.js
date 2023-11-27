let mic; // imports mic capability
const num = 1500; // sets number of particles that'll show on screen
const noiseScale = 0.01 / 2; // changes the pattern
let bgColor1, bgColor2; // creates bGc olor variables for lerpColor
let particleColor1, particleColor2; // creates particle color variables for lerpColor
let t = 0; // creates time variable used in lerpColor (defult 0, increasing makes bG color change faster)

class Particle {
  // all points use a particle class
  constructor(x, y) {
    this.position = createVector(x, y);
  }

  update(vol) {
    // position of particles is based on volume change in microphone input
    let n = noise(
      this.position.x * noiseScale,
      this.position.y * noiseScale,
      frameCount * noiseScale * noiseScale
    );
    let a = vol * 1000 * n; // increases seed of flow field based on volume value
    this.position.x += cos(a) * 5; // changes the direction of particle movement in x direction ... (I assume)
    this.position.y += sin(a) * 5; // changes the direction of particle movement in y direction ... (again, I assume)

    if (!this.onScreen()) {
      // keeps particles within screen
      this.position.x = random(width);
      this.position.y = random(height);
    }
  }

  onScreen() {
    // keeps particles within screen
    return (
      this.position.x >= 0 &&
      this.position.x <= width &&
      this.position.y >= 0 &&
      this.position.y <= height
    );
  }

  display() {
    // displays the points and sets color of point based on its position on screen (red left and green right)
    stroke(lerpColor(particleColor1, particleColor2, this.position.x / width));
    point(this.position.x, this.position.y);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight); // set canvas size to fill size of screen
  mic = new p5.AudioIn(); // instantiates mic
  mic.start(); // start mic

  bgColor1 = color(0, 7, 100); // set first bg color to dark blue
  bgColor2 = color(50, 0, 50); // set second bg color to dark red
  particleColor1 = color(255, 50, 50); // set particles on left red/pink color
  particleColor2 = color(50, 255, 50); // set particles on right green color

  for (let i = 0; i < num; i++) {
    // randomly positions particles on screen on every run
    particles.push(new Particle(random(width), random(height)));
  }

  stroke(255); // change particle opacity (not color in this instance because we are using lerpColor())
  strokeWeight(3); // change particle size
  clear();
}

function draw() {
  background(lerpColor(bgColor1, bgColor2, noise(t))); // set background to alternate between two bg colors
  t += 0.005; // set t to a constant (higher numbers means alternates more often)

  var vol = mic.getLevel(); // get value of volume variable
  console.log(vol); // log volume variable in console (for testing)

  for (let i = 0; i < num; i++) {
    // use Particle class functions on each particle continuously
    particles[i].display();
    particles[i].update(vol);
  }
}

const particles = []; // create array for all particles
