function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  line(width / 4, 0, width / 4, height);
  line((width / 4) * 3, 0, (width / 4) * 3, height);
  line((width / 4) * 2, 0, (width / 4) * 2, height);
  line((width / 4) * 3, 0, (width / 4) * 3, height);
  line(0, height / 4, width, height / 4);
  line(0, (height / 4) * 2, width, (height / 4) * 2);
  line(0, (height / 4) * 3, width, (height / 4) * 3);

  fill("black");
  rect(width / 4, height / 4, (width / 4) * 2, height / 4);
  rect(width / 4, (height / 4) * 2, (width / 4) * 2, height / 4);

  stroke("grey"); //make stroke thicker later maybe
  // strokeWeight(2);

  red = color(251, 54, 64);
  redpink = color(221, 17, 85);
  pink = color(255, 73, 158);
  pinkorange = color(255, 89, 94);
  orange = color(245, 143, 41);
  orangeyellow = color(255, 181, 36);
  yellow = color(242, 242, 48);
  yellowgreen = color(194, 242, 97);
  green = color(138, 201, 38);
  greenblue = color(8, 143, 143);
  blue = color(0, 184, 253);
  bluepurple = color(105, 0, 253);
  purple = color(158, 75, 255);

  from = purple;
  to = pink;

  if (hour() == 0) {
    from = greenblue;
    to = blue;
  }

  if (hour() == 1) {
    from = blue;
    to = bluepurple;
  }

  if (hour() == 2) {
    from = bluepurple;
    to = purple;
  }

  if (hour() == 3) {
    from = purple;
    to = red;
  }

  if (hour() == 4) {
    from = red;
    to = redpink;
  }

  if (hour() == 5) {
    from = redpink;
    to = pink;
  }

  if (hour() == 6) {
    from = pink;
    to = pinkorange;
  }

  if (hour() == 7) {
    from = pinkorange;
    to = orange;
  }

  if (hour() == 8) {
    from = orange;
    to = orangeyellow;
  }

  if (hour() == 9) {
    from = orangeyellow;
    to = yellow;
  }

  if (hour() == 10) {
    from = yellow;
    to = yellowgreen;
  }

  if (hour() == 11) {
    from = yellowgreen;
    to = green;
  }

  if (hour() == 12) {
    from = green;
    to = blue;
  }

  if (hour() == 13) {
    from = yellowgreen;
    to = blue;
  }

  if (hour() == 14) {
    from = green;
    to = bluepurple;
  }

  if (hour() == 15) {
    from = yellowgreen;
    to = bluepurple;
  }

  if (hour() == 16) {
    from = purple;
    to = red;
  }

  if (hour() == 17) {
    from = bluepurple;
    to = redpink;
  }

  if (hour() == 18) {
    from = green;
    to = pink;
  }

  if (hour() == 19) {
    from = pink;
    to = orangeyellow;
  }

  if (hour() == 20) {
    from = red;
    to = orangeyellow;
  }

  if (hour() == 21) {
    from = orange;
    to = yellowgreen;
  }

  if (hour() == 22) {
    from = yellowgreen;
    to = blue;
  }

  if (hour() == 23) {
    from = greenblue;
    to = purple;
  }

  // outer rim — hour blocks that increment per hour and dynamic block that grows each second
  // fill(lerpColor(from, to, ((minute() / 60) * 1) / 12)); this changes it according to min passed instead of x/12 fraction

  if (hour() % 12 >= 0) {
    fill(lerpColor(from, to, 1 / 12));
    if (hour() % 12 == 0) {
      rect(0, 0, ((width / 4) * second()) / 60, ((height / 4) * second()) / 60);
    } else if (hour() % 12 > 0) {
      fill(lerpColor(from, to, 1 / 12));
      rect(0, 0, width / 4, height / 4);
    } else if (hour() % 12 < 0) {
      fill("black");
      rect(0, 0, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 1) {
    fill(lerpColor(from, to, 2 / 12));
    if (hour() % 12 == 1) {
      rect(
        width / 4,
        0,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 1) {
      fill(lerpColor(from, to, 2 / 12));
      rect(width / 4, 0, width / 4, height / 4);
    } else if (hour() % 12 < 1) {
      fill("black");
      rect(width / 4, 0, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 2) {
    fill(lerpColor(from, to, 3 / 12));
    if (hour() % 12 == 2) {
      rect(
        (width / 4) * 2,
        0,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 2) {
      fill(lerpColor(from, to, 3 / 12));
      rect((width / 4) * 2, 0, width / 4, height / 4);
    } else if (hour() % 12 < 2) {
      fill("black");
      rect((width / 4) * 2, 0, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 3) {
    fill(lerpColor(from, to, 4 / 12));
    if (hour() % 12 == 3) {
      rect(
        (width / 4) * 3,
        0,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 3) {
      fill(lerpColor(from, to, 4 / 12));
      rect((width / 4) * 3, 0, width / 4, height / 4);
    } else if (hour() % 12 < 3) {
      fill("black");
      rect((width / 4) * 3, 0, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 4) {
    fill(lerpColor(from, to, 5 / 12));
    if (hour() % 12 == 4) {
      rect(
        (width / 4) * 3,
        height / 4,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 4) {
    fill(lerpColor(from, to, 5/ 12));
      rect((width / 4) * 3, height / 4, width / 4, height / 4);
    } else if (hour() % 12 < 4) {
      fill("black");
      rect((width / 4) * 3, height / 4, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 5) {
    fill(lerpColor(from, to, 6 / 12));
    if (hour() % 12 == 5) {
      rect(
        (width / 4) * 3,
        (height / 4) * 2,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 5) {
    fill(lerpColor(from, to, 6 / 12));
      rect((width / 4) * 3, (height / 4) * 2, width / 4, height / 4);
    } else if (hour() % 12 < 5) {
      fill("black");
      rect((width / 4) * 3, (height / 4) * 2, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 6) {
    fill(lerpColor(from, to, 7 / 12));
    if (hour() % 12 == 6) {
      rect(
        (width / 4) * 3,
        (height / 4) * 3,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 6) {
      fill(lerpColor(from, to, 7 / 12));
      rect((width / 4) * 3, (height / 4) * 3, width / 4, height / 4);
    } else if (hour() % 12 < 6) {
      fill("black");
      rect((width / 4) * 3, (height / 4) * 3, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 7) {
    fill(lerpColor(from, to, 8 / 12));
    if (hour() % 12 == 7) {
      rect(
        (width / 4) * 2,
        (height / 4) * 3,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 7) {
      fill(lerpColor(from, to, 8 / 12));
      rect((width / 4) * 2, (height / 4) * 3, width / 4, height / 4);
    } else if (hour() % 12 < 7) {
      fill("black");
      rect((width / 4) * 2, (height / 4) * 3, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 8) {
    fill(lerpColor(from, to, 9 / 12));
    if (hour() % 12 == 8) {
      rect(
        (width / 4) * 1,
        (height / 4) * 3,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 8) {
      fill(lerpColor(from, to, 9 / 12));
      rect((width / 4) * 1, (height / 4) * 3, width / 4, height / 4);
    } else if (hour() % 12 < 8) {
      fill("black");
      rect((width / 4) * 1, (height / 4) * 3, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 9) {
    fill(lerpColor(from, to, 10 / 12));
    if (hour() % 12 == 9) {
      rect(
        0,
        (height / 4) * 3,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 9) {
      fill(lerpColor(from, to, 10 / 12));
      rect(0, (height / 4) * 3, width / 4, height / 4);
    } else if (hour() % 12 < 9) {
      fill("black");
      rect(0, (height / 4) * 3, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 10) {
    fill(lerpColor(from, to, 11 / 12));
    if (hour() % 12 == 10) {
      rect(
        0,
        (height / 4) * 2,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 10) {
      fill(lerpColor(from, to, 11 / 12));
      rect(0, (height / 4) * 2, width / 4, height / 4);
    } else if (hour() % 12 < 10) {
      fill("black");
      rect(0, (height / 4) * 2, width / 4, height / 4);
    }
  }

  if (hour() % 12 >= 11) {
    fill(lerpColor(from, to, 12 / 12));
    if (hour() % 12 == 11) {
      rect(
        0,
        height / 4,
        ((width / 4) * second()) / 60,
        ((height / 4) * second()) / 60
      );
    } else if (hour() % 12 > 11) {
      fill(lerpColor(from, to, 12 / 12));
      rect(0, height / 4, width / 4, height / 4);
    } else if (hour() % 12 < 11) {
      fill("black");
      rect(0, height / 4, width / 4, height / 4);
    }
  }

  // first middle section — increments every minute and resets at 12

  m = minute() % 12;

  if (m >= 1) {
    fill(lerpColor(from, to, ((minute() / 60) * 1) / 12));
    rect(width / 4, height / 4, ((width / 4) * 2) / 12, height / 4);
  }

  if (m >= 2) {
    fill(lerpColor(from, to, ((minute() / 60) * 2) / 12));
    rect(
      width / 4 + ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  if (m >= 3) {
    fill(lerpColor(from, to, ((minute() / 60) * 3) / 12));
    rect(
      width / 4 + ((width / 4) * 2) / 12 + ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  if (m >= 4) {
    fill(lerpColor(from, to, ((minute() / 60) * 4) / 12));
    rect(
      width / 4 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  if (m >= 5) {
    fill(lerpColor(from, to, ((minute() / 60) * 5) / 12));
    rect(
      width / 4 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  if (m >= 6) {
    fill(lerpColor(from, to, ((minute() / 60) * 6) / 12));
    rect(
      width / 4 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  if (m >= 7) {
    fill(lerpColor(from, to, ((minute() / 60) * 7) / 12));
    rect(
      width / 4 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  if (m >= 8) {
    fill(lerpColor(from, to, ((minute() / 60) * 8) / 12));
    rect(
      width / 4 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  if (m >= 9) {
    fill(lerpColor(from, to, ((minute() / 60) * 9) / 12));
    rect(
      width / 4 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  if (m >= 10) {
    fill(lerpColor(from, to, ((minute() / 60) * 10) / 12));
    rect(
      width / 4 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  if (m >= 11) {
    fill(lerpColor(from, to, ((minute() / 60) * 11) / 12));
    rect(
      width / 4 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  if (m >= 12) {
    fill(lerpColor(from, to, ((minute() / 60) * 12) / 12));
    rect(
      width / 4 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12 +
        ((width / 4) * 2) / 12,
      height / 4,
      ((width / 4) * 2) / 12,
      height / 4
    );
  }

  // second middle section — increments each time 12 minutes pass (total of 5 blocks)

  if (minute() >= 12) {
    fill(lerpColor(from, to, ((minute() / 60) * 1) / 5));
    rect(width / 4, (height / 4) * 2, ((width / 4) * 2) / 5, height / 4);
  }

  if (minute() >= 24) {
    fill(lerpColor(from, to, ((minute() / 60) * 2) / 5));
    rect(
      width / 4 + ((width / 4) * 2) / 5,
      (height / 4) * 2,
      ((width / 4) * 2) / 5,
      height / 4
    );
  }

  if (minute() >= 36) {
    fill(lerpColor(from, to, ((minute() / 60) * 3) / 5));
    rect(
      width / 4 + ((width / 4) * 2) / 5 + ((width / 4) * 2) / 5,
      (height / 4) * 2,
      ((width / 4) * 2) / 5,
      height / 4
    );
  }

  if (minute() >= 48) {
    fill(lerpColor(from, to, ((minute() / 60) * 4) / 5));
    rect(
      width / 4 +
        ((width / 4) * 2) / 5 +
        ((width / 4) * 2) / 5 +
        ((width / 4) * 2) / 5,
      (height / 4) * 2,
      ((width / 4) * 2) / 5,
      height / 4
    );
  }

  if (minute() >= 60) {
    fill(lerpColor(from, to, ((minute() / 60) * 5) / 5));
    rect(
      width / 4 +
        ((width / 4) * 2) / 5 +
        ((width / 4) * 2) / 5 +
        ((width / 4) * 2) / 5 +
        ((width / 4) * 2) / 5,
      (height / 4) * 2,
      ((width / 4) * 2) / 5,
      height / 4
    );
  }
}