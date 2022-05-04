


let img; //画像表示の変数
let pg;
let wx;
let wy;

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
  pg = createGraphics(windowWidth, windowHeight);
  img= loadImage("kaso.png"); 
 
  //画面を固定する記述
    window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
  
 

}

function draw() {
 
 
  // map()で、マウスを動かした時のスケールを拡張。ここもう少しまとめられる気がする
  var mx = map(
    mouseX, 
    wx/2-200, wx/2+200, 
    wx/2-5000, wx/2+5000
    );
  var my = map(
    mouseY, 
   wy/2-200, wy/2+200, 
    wy/2-5000, wy/2+5000
    );
  var pmx = map(
    pmouseX, 
   wx/2-200, wx/2+200, 
    wx/2-5000, wx/2+5000
    );
 var pmy = map(
    pmouseY, 
    wy/2-200, wy/2+200, 
    wy/2-5000, wy/2+5000
    );


//マウスを押したとき線を描く
  if (mouseIsPressed) {
   pg.strokeWeight(18);
    
    pg.line(pmx, pmy, mx, my);
   
  }
  
  
  
  background(255);
   rect(wx/2-100, wy/2-60, 200, 120);
  image(pg,0,0);


 /* image(pg, 0, 0);*/
//デカいマウスを動かす
  image(img, mx-60, my-60); 
// rect( mx-60, my-60,100,100);
 
 
  
  
      
}
