// main.ts

/// <reference path="p5.global-mode.d.ts" />

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  ellipse(200,200,100,100);

  if (mouseIsPressed) {
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
  }
}
