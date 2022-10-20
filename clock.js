let angle, t;
function setup() {
  let cnv= createCanvas(windowWidth, windowHeight);

    cnv.position(0,0);//canvasをページの原点に固定
    cnv.style('z-index','-1');
  angle = 0;
  flg = false;
  background(20);
  t = 0;
  frameRate(60);
  
   // window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  //window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
}

function draw() {
  background(20);
  angle++;
  let s = second();
  let m = minute();
  let h = hour();
  let s1 = floor(s / 1) % 10;
  let s10 = floor(s / 10) % 10;
  let m1 = floor(m / 1) % 10;
  let m10 = floor(m / 10) % 10;
  let h1 = floor(h / 1) % 10;
  let h10 = floor(h / 10) % 10;

  let r = radians(angle);

  stroke(255);
  strokeWeight(2);

  a = angle % 360;
  for (let i = 0; i < 380; i++) {
    let sx = cos(i * (s1 + 1)) * 50;
    let sy = sin(i * (s10 + 1)) * 50;
    let mx = cos(i * (m1 + 1)) * 50;
    let my = sin(i * (m10 + 1)) * 50;
    let hx = cos(i * (h1 + 1)) * 50;
    let hy = sin(i * (h10 + 1)) * 50;
    point((width * 3) / 4 + sx, (height * 1) / 2 + sy);
    point((width * 1) / 2 + mx, (height * 1) / 2 + my);
    point((width * 1) / 4 + hx, (height * 1) / 2 + hy);
  }

  // point(100 + x,150 + y);
  //  point(250 + x1,150 + y1);

  /*if(s == 0){
    flg = true;
    
  }
  else if(s == 59){
    flg = false;
    t = 0;
    
    
  }
  if(flg == true){
    t ++;
  }
  if(t == 60){
   // background(20);
    t = 0;
  
  }*/

  strokeWeight(0);
  textSize(12);

  fill(255);
  text("cos( i *   (" + s1 + "  + 1))", (width * 2) / 3, (height * 3) / 4);
  text(
    "sin( i *   (" + s10 + "  + 1))",
    (width * 2) / 3,
    (height * 3) / 4 + 30
  );

  text("cos( i *   (" + m1 + "  + 1))", (width * 2) / 5, (height * 3) / 4);
  text(
    "sin( i *   (" + m10 + "  + 1))",
    (width * 2) / 5,
    (height * 3) / 4 + 30
  );

  text("cos( i *   (" + h1 + "  + 1))", (width * 1) / 6, (height * 3) / 4);
  text(
    "sin( i *   (" + h10 + "  + 1))",
    (width * 1) / 6,
    (height * 3) / 4 + 30
  );
  textSize(22);
  text(h + ":" + m + ":" + s, (width * 2) / 5, (height * 1) / 4);
}
