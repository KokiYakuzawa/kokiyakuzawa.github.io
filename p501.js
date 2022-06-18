


let img; //画像表示の変数
let pg;
let wx;
let wy;
let  realxL;
 let realxR;
 let extxL;
 let extxR;
  
 let  realyL;
 let realyR;
 let extyL;
 let extyR;

//事前読み込みをpreload関数で行う
function preload() {
  //変数を使って画像をロード
  img = loadImage("kaso.png"); 
}

//層を追加して線の軌跡を残しつつカーソルの軌跡を消すための何か


function setup() {
  
  wx= windowWidth;
   wy= windowHeight;
frameRate(30);
  background(255);
  createCanvas(wx,wy);
   pixelDensity(1);
  pg = createGraphics(wx, wy);
  img= loadImage("kaso.png"); 

  //画面を固定する記述
   // window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
 // window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
 realxL=wx*7/15;
  realxR=wx*8/15;
  extxL=0;
  extxR=wx*10;
  
   realyL=wy*7/15;
  realyR=wy*8/15;
  extyL=0;
  extyR=wy*10;

}

function draw() {
 
 
 
 
  let mx = map(mouseX,realxL,realxR,extxL,extxR);
   let my = map(mouseY,realyL,realyR,extyL,extyR);
   let pmx = map(mouseX,realxL,realxR,extxL,extxR);
   let pmy = map(mouseY,realyL,realyR,extyL,extyR);
  
  

//マウスを押したとき線を描く
  if (mouseIsPressed) {
   pg.strokeWeight(18);
    
    pg.line(pmx, pmy, mx, my);
    pg.ellipse(mouseX,mouseY,40,40);
    
   
  }
 
  
  background(255);
  
  // rect(width/4, height/4, 200, 120);
  image(pg,0,0);
rect(wx*7/15,wy*7/15,300,120);




 /* image(pg, 0, 0);*/
//デカいマウスを動かす
  image(img, mx, my); 
 noFill();
 rect( mx-60, my-60,100,100);
 
 //ellipse(mx-60,my-60,30,30);
 
  
  
      
}
