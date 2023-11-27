let mic;
const num = 1000;
const noiseScale = 0.01 / 2;

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
  }

  update(vol) {
    let n = noise(
      this.position.x * noiseScale,
      this.position.y * noiseScale,
      frameCount * noiseScale * noiseScale
    );
    let a = vol * 1000 * n;
    this.position.x += cos(a);
    this.position.y += sin(a);

    if (!this.onScreen()) {
      this.position.x = random(width);
      this.position.y = random(height);
    }
  }

  onScreen() {
    return (
      this.position.x >= 0 &&
      this.position.x <= width &&
      this.position.y >= 0 &&
      this.position.y <= height
    );
  }

  display() {
    point(this.position.x, this.position.y);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();

  for (let i = 0; i < num; i++) {
    particles.push(new Particle(random(width), random(height)));
  }

  stroke(255);
  strokeWeight(3);
  clear();
}

function draw() {
  background(0, 7);

  var vol = mic.getLevel();
  console.log(vol);

  for (let i = 0; i < num; i++) {
    particles[i].display();
    particles[i].update(vol);
  }
}

const particles = [];

// second iteration
// create two objects that do different things
// make it interactive -- mouse click//mouse hover?

// var mic;

// let particles = [];
// const num = 1000;

// const noiseScale = 0.01 / 2;

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   mic = new p5.AudioIn();
//   mic.start();

//   for (let i = 0; i < num; i++) {
//     particles.push(createVector(random(width), random(height)));
//   }
//   //   colorMode(HSB);
//   stroke(255);
//   strokeWeight(3);
//   clear();
// }

// function draw() {
//   background(0, 7);

//   var vol = mic.getLevel();
//   console.log(vol);

//   for (let i = 0; i < num; i++) {
//     let p = particles[i];
//     point(p.x, p.y);
//     let n = noise(
//       p.x * noiseScale,
//       p.y * noiseScale,
//       frameCount * noiseScale * noiseScale
//     );
//     let a = vol * 1000 * n; // direction (seed) of squiggly lines change based on sound
//     p.x += cos(a);
//     p.y += sin(a);
//     if (!onScreen(p)) {
//       p.x = random(width);
//       p.y = random(height);
//     }
//   }
// }

// function onScreen(v) {
//   return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
// }
