


let img; //画像表示の変数
let pg;
let wx;
let wy;
let  realL;
 let realR;
 let extL;
 let extR;
  
 
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
let cnv= createCanvas(windowWidth, windowHeight);

    cnv.position(0,0);//canvasをページの原点に固定
    cnv.style('z-index','-1');
   pixelDensity(1);
  pg = createGraphics(wx, wy+350);
  img= loadImage("kaso.png"); 

  //画面を固定する記述
   // window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
 // window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
 realL=width/2-20;
  realR=width/2+20;
  extL=-1000;
  extR=1000;
 
 textSize(10);


let t = '←この枠にマウスカーソルを置く.※クリックで描画.';



}

function draw() {
 let x=mouseX;
 let y=mouseY+350;
 let px=pmouseX;
 let py=pmouseY+350;

 
 
  let mx = map(x,realL,realR,extL,extR);
  let my = map(y,realL,realR,extL,extR);
  let pmx = map(px,realL,realR,extL,extR);
  let pmy = map(py,realL,realR,extL,extR);
  
   translate(0,-350);
  

 //pg.translate(width*1/2-20, height*1/2);
//マウスを押したとき線を描く
  if (mouseIsPressed) {
   pg.strokeWeight(18);
    
    pg.line(pmx, pmy, mx, my);
   // pg.ellipse(mouseX,mouseY,40,40);
    
   
  }
 
  
  background(255);
  
  // rect(width/4, height/4, 200, 120);
  image(pg,0,0);
rect(width/2,width/2,50,30);
 fill(80);
text(t, width/2+55,width/2+10,100, 100);



 /* image(pg, 0, 0);*/
//デカいマウスを動かす
  image(img, mx-60, my-60); 

// rect( mx-60, my-60,100,100);
 
 //ellipse(mx-60,my-60,30,30);
 
  
  
      
}
