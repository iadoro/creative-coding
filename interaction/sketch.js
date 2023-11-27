let capture;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);

  capture.size(windowWidth, windowHeight);

  capture.hide();
}

function draw() {
  background("white");
  image(capture, 0, 0, width, height);

  for (let circle of circles) {
    circle.update();
    circle.display();
    circle.bounce();
  }
}

// can use either space bar or mouse to generate circle -- how to make it compatible on phone?

function keyPressed() {
  if (keyCode === 32) {
    let x = random(width);
    let y = random(height);
    let circle = new Circle(x, y, capture);
    circles.push(circle);
  }
}

function mousePressed() {
  let x = random(width);
  let y = random(height);
  let circle = new Circle(x, y, capture);
  circles.push(circle);
}

class Circle {
  constructor(x, y, video) {
    this.x = x;
    this.y = y;
    this.video = video;
    this.radius = random(15, 50);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  bounce() {
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.xSpeed *= -2; // speed increases after hitting edge so don't increase over |-1|
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.ySpeed *= -2;
    }
  }

  display() {
    let circleColor = this.video.get(int(this.x), int(this.y));
    // print(circleColor[0]);
    fill(circleColor[0], circleColor[1], circleColor[2]);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
}
