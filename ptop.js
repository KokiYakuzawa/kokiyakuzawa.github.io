let nFrames = 200;
let nPoints = 30;
let delay = 3.0;
function setup() {
  let cnv= createCanvas(windowWidth, windowHeight);

    cnv.position(0,0);//canvasをページの原点に固定
    cnv.style('z-index','-1');
}

function draw() {
  background(255);
  stroke(25);
  fill(255);
   let timing = frameCount / nFrames;
  x1 = width / 2 + 50 ;//+ 50 * cos(TWO_PI * timing);
  y1 = height / 2 + 20 * sin(TWO_PI * timing) ;
  x2 = width / 2 +  200 + 50 * cos(TWO_PI * timing);
  y2 = height / 2 + 70 * sin(TWO_PI * timing) ;
  
 
  circle( x1, y1 , 5);
 // circle( x2, y2, 5);
  beginShape();
  for(let counter = 0; counter < nPoints; counter += 1){
  let percentage = counter/nPoints;
  
  // let  c = map(counter,200,499,255,0);
   //  stroke(c);
    
    let delayedTiming = (timing-delay*percentage);
  
   let xTwoDelayed = width / 2 + 350 + 80 * cos(TWO_PI * delayedTiming);
   let yTwoDelayed = height / 2 + 70 * sin(TWO_PI * delayedTiming) ;
  
    
     let xLerped = lerp(x1, xTwoDelayed, percentage);
   let yLerped = lerp(y1, yTwoDelayed, percentage);
 
   curveVertex(xLerped, yLerped);
   
  }
   endShape();
}
