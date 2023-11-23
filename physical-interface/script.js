let serial;
let portName = "/dev/tty.usbmodem142201";

let activeSensor = "";

let potValue = 0;
let photoValue = 0;

const particles = [];
const num = 1500;
const noiseScale = 0.01 / 2;
let bgColor1, bgColor2;
let particleColor1, particleColor2;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowWidth);
  bgColor1 = color(0, 50, 50);
  bgColor2 = color(50, 0, 50);

  particleColor1 = color(0, 50, 50);
  particleColor2 = color(50, 255, 50);

  for (let i = 0; i < num; i++) {
    particles.push(new Particle(random(width), random(height)));
  }

  stroke(255);
  strokeWeight(3);
  clear();

  serial = new p5.SerialPort();

  serial.onList(gotList);
  serial.list();

  serial.onOpen(gotOpen);
  serial.openPort(portName);

  serial.onData(gotData);
}

function draw() {
  background(lerpColor(bgColor1, bgColor2, noise(t)));
  t += 0.005;

  var pot = potValue;

  for (let i = 0; i < num; i++) {
    particles[i].display();
    particles[i].update(pot / 10);
  }
}

function gotList(ports) {
  for (let i = 0; i < ports.length; i++) {
    console.log(ports[i]);
  }
}

function gotOpen() {
  console.log("Port open!");
}

function gotData() {
  let newData = serial.readLine();
  if (newData.length <= 0) return;
  console.log(newData);

  if (newData === "potentiometer" || newData === "photocell") {
    activeSensor = newData;
  } else {
    if (activeSensor === "potentiometer") {
      potValue = newData / 2;
    }
    if (activeSensor === "photocell") {
      photoValue = newData / 4;
    }
  }
}

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
    this.position.x += cos(a) * 5;
    this.position.y += sin(a) * 5;

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
    stroke(lerpColor(particleColor1, particleColor2, this.position.x / width));
    point(this.position.x, this.position.y);
  }
}
