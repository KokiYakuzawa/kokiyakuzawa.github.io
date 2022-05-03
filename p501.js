// main.ts

/// <reference path="p5.global-mode.d.ts" />



 var i =0;
function setup() {
  createCanvas(windowWidth,windowHeight);
 rectMode(CENTER);
   
   //画面を固定する記述
    window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(255);
  noStroke();
  fill(0);
   i++;
    ellipse(windowWidth/2,i,20,20)
  if(i>windowHeight){
    i=0;
  }
  
  fill(80);
  rect(windowWidth/2,windowHeight/2,50,182);
  fill(255);
  rect(windowWidth/2,windowHeight/2,100,180);
 
  
  
}
