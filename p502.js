

let x,y,xs,ys,t,r,count,score;
function setup() {
  createCanvas(400, 600);
  x=width/2;
  y=height;
  t=0;
   flg=0;
   
  r=38;
  count=0;
  score=0;
  
  //全画面
   wx= windowWidth;
   wy= windowHeight;

  createCanvas(wx,wy);
 
 
  //画面を固定する記述
    window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
}

function draw() {
  //background(247, 249, 250);
  noStroke();
   fill(247, 249, 250,100);
  rect(0,0,width,height);

  
  t=random(1)
 let precat = false;
  let cat = false;
  let hol=false;
  
  //通常時
   if(hol===false ){
    
  x=x+xs+random(-3,3);
    y-=12;
  //ポイの影
   noFill();
  stroke(230,80);
  strokeWeight(15);
 ellipse(width/2-38,height/2+8, 200, 200);
 
  stroke(220,80);
  strokeWeight(8);
 ellipse(width/2-38,height/2+8, 200, 200);
  
     //金魚の影
  noStroke();
   fill(220,80);
  ellipse(x-46,y+19,42,43);
    
     fill(220,100);
  ellipse(x-46,y+19,30,30);
  //金魚
   fill(255, 107, 107);
ellipse(x,y,38,38);
   
   /*x=x+xs;*/
  
 
  if(y<0&&t>0.97){
    y=height;
    x=random(width/3,2*width/3);
    xs=random(-3,3);
  } 
  fill(255,200);
  stroke(158, 214, 230);
  strokeWeight(10);
 ellipse(width/2,height/2, 200, 200);
   }
   //タッチした時
   if(mouseIsPressed) {
      //影を消す
    noFill();
      stroke(247, 249, 250,255);
  strokeWeight(15);
 ellipse(width/2-38,height/2+8, 200, 200);
     //絵の影
      fill(230,80);
  noStroke();
   rect(0,height/2+5,95,15);
   fill(220,80);
 rect(0,height/2+5,95,10);
    
    
      //ポイの影
   noFill();
  stroke(230,80);
  strokeWeight(15);
 ellipse(width/2-15,height/2+4, 200, 200);
 stroke(220,80);
  strokeWeight(8);
 ellipse(width/2-15,height/2+4, 200, 200);
    
      hol=true;
     //ポイ
　noFill();
  stroke(158, 214, 230);
  strokeWeight(10);
 ellipse(width/2,height/2, 200, 200);
  // prevent default
     fill(255, 107, 107);
     noStroke();
        ellipse(x,y,38,38);
     
     
    if(width/2-50<x && width/2+50>x 
       && height/2-50<y &&height/2+50>y){
      
   
      flg =1;
    }
     else{
        flg =0;
     }
   
    
  
}
 //キャッチ成功
 if( precat !=null){
   if(hol===false && flg==1){
     
    background(250, 202, 45);
     
     ellipse(width/2,height/2, 200, 200);
       fill(255,100);
  stroke(158, 214, 230);
  strokeWeight(10);
 ellipse(width/2,height/2, 200, 200);
     if(r<=100){
     r=r+8;
      fill(255, 107, 107);
     noStroke();
    ellipse(width/2+r/2,height/2,r,r);
   }
    else if(r>100){
      count++;
      fill(255, 107, 107);
     noStroke();
       ellipse(width/2+r/2,height/2,100,100);
     
    }
     if(count>60){
        r=38;
        flg=0;
     count=0;
       score=score+1;
     }
     
  }

 }//えの影
   fill(230,80);
  noStroke();
   rect(0,height/2+5,80,15);
   fill(220,80);
 
   rect(0,height/2+5,80,10);
  
  //ポイのえ
   fill(158, 214, 230);
  noStroke();
   rect(0,height/2-5,120,15);
  print(hol);
  //score
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(90);
  textSize(20);
  fill(44, 169, 242);
text(score+'  匹 め',-height/2+60 , -width/2+36);
}
