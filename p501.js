// main.ts

/// <reference path="p5.global-mode.d.ts" />

function setup(){
   window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
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
