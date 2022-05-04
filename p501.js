// main.ts

/// <reference path="p5.global-mode.d.ts" />




 

let img; //画像表示の変数
let pg;

//事前読み込みをpreload関数で行う
function preload() {
  //変数を使って画像をロード
  /* img = loadImage("https://loremflickr.com/600/600"); */
}

//層を追加して線の軌跡を残しつつカーソルの軌跡を消すための何か


function setup() {

  background(255);
  createCanvas(windowWidth,windowHeight);
  pg = createGraphics(1920, 1080);
  /* img= loadImage("kaso.png"); */
 
   //画面を固定する記述
    window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 
 
  // map()で、マウスを動かした時のスケールを拡張。ここもう少しまとめられる気がする
  var mx = map(
    mouseX, 
    400,800,
    0, 10000
    );
  var my = map(
    mouseY, 
    400,800,
    0, 10000
    );
  var pmx = map(
    pmouseX, 
    400,800,
    0, 10000
    );
 var pmy = map(
    pmouseY, 
   400,800,
    0, 10000
    );
    
 /* pg.beginDraw();*/
//マウスを押したとき線を描く
  if (mouseIsPressed) {
    pg.strokeWeight(18);
    pg.line(pmx, pmy, mx, my);
   // pg.endDraw();
   
  }
   
  background(255);
  
rect(windowWidth/3, windowHeight/3, windowWidth*2/3,windowHeight*2/3);
 /* image(pg, 0, 0);*/
//デカいマウスを動かす
 /* image(img, mx-60, my-60); */
   rect( mx-60, my-60,100,100);
}
