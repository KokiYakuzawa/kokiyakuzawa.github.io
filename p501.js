// main.ts

/// <reference path="p5.global-mode.d.ts" />

function setup(): void {
  createCanvas(windowWidth, windowHeight);
}

function draw(): void {
  background(0);
  ellipse(200,200,10,10);

  if (mouseIsPressed) {
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
  }
}
