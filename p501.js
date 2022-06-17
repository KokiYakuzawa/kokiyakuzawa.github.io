


let img; //画像表示の変数
let pg;
let wx;
let wy;
let realx=400;
let realy=800;
let extx=0;
let exty=10000;

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
  pg = createGraphics(wx, wy);
  img= loadImage("kaso.png"); 
 
  //画面を固定する記述
    window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
  
 

}

function draw() {
 
 
 
 
  let mx = map(mouseX,realx,realy,extx,exty);
   let my = map(mouseY,realx,realy,extx,exty);
   let pmx = map(pmouseX,realx,realy,extx,exty);
   let pmy = map(pmouseY,realx,realy,extx,exty);
  
  

//マウスを押したとき線を描く
  if (mouseIsPressed) {
   pg.strokeWeight(18);
    
    pg.line(pg.pmx, pg.pmy, pg.mx, pg.my);
    pg.line(pmouseX,pmouseY,mouseX,mouseY);
   
  }
  
  
  
  background(255);
  // rect(width/4, height/4, 200, 120);
  image(pg,0,0);


 /* image(pg, 0, 0);*/
//デカいマウスを動かす
  image(img, mx, my); 
// rect( mx-60, my-60,100,100);
 ellipse(mx,my,30,30);
 
  
  
      
}
