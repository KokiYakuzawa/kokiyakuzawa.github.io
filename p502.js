let w = [];
const num = 3;
let t, r, count, score,hurt;

function preload() {
  // setupより先に実行
  font = loadFont("UDDigiKyokashoNK-B-03.ttf");
}

function setup() {
  createCanvas(width, height);
  

 textFont(font);
  
hurt=100;
  t = 0;
  flg = 0;
  for (let i = 0; i < num; i++) {
    w.push(new W(0, height, 0, random(-3, 5)));
  }
  r = 38;
  count = 0;
  score = 0;
  cat=0;

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
  fill(247, 249, 250, 100);
  rect(0, 0, width, height);

  t = random(1);
  let precat = false;
  let cat = false;
  let hol = false;

  //通常時
  if (hol === false) {
    for (let i = 0; i < num; i++) {
      w[i].move();
    }
   
    //ポイの影
    noFill();
    stroke(230, 80);
    strokeWeight(15);
    ellipse(width / 2 - 38, height / 2 + 8, 200, 200);

    stroke(220, 80);
    strokeWeight(8);
    ellipse(width / 2 - 38, height / 2 + 8, 200, 200);

    for (let i = 0; i < num; i++) {
      w[i].display();
      w[i].display_k();
    }

    //金魚の影
    /* noStroke();
   fill(220,80);
  ellipse(x-46,y+19,42,43);
    
     fill(220,100);
  ellipse(x-46,y+19,30,30);
  //金魚
   fill(255, 107, 107);
ellipse(x,y,38,38);*/

    /*x=x+xs;*/

    //retrunしろ
    for (let i = 0; i < num; i++) {
      w[i].return();
    }
    /* if(y<0&&t>0.97){
    y=height;
    x=random(width/3,2*width/3);
    xs=random(-3,3);
  } */

    fill(255, 200);
    stroke(158, 214, 230);
    strokeWeight(10);
    ellipse(width / 2, height / 2, 200, 200);
  }
  //タッチした時
  if (mouseIsPressed) {
    //影を消す
    noFill();
    stroke(247, 249, 250, 255);
    strokeWeight(15);
    ellipse(width / 2 - 38, height / 2 + 8, 200, 200);
    //絵の影
    fill(230, 80);
    noStroke();
    rect(0, height / 2 + 5, 95, 15);
    fill(220, 80);
    rect(0, height / 2 + 5, 95, 10);

    //ポイの影
    noFill();
    stroke(230, 80);
    strokeWeight(15);
    ellipse(width / 2 - 15, height / 2 + 4, 200, 200);
    stroke(220, 80);
    strokeWeight(8);
    ellipse(width / 2 - 15, height / 2 + 4, 200, 200);

    hol = true;
    //ポイ
    noFill();
    stroke(158, 214, 230);
    strokeWeight(10);
    ellipse(width / 2, height / 2, 200, 200);
    // prevent default
    fill(255, 107, 107);
    noStroke();

    for (let i = 0; i < num; i++) {
     
      w[i].display();
      w[i].flgtate();
    }
    
   
   
  }
  
  //キャッチ成功
  if (precat != null) {
    if (hol === false && flg == 1) {
      cat=1;
    }
    if(cat==1){
      
    
      background(250, 202, 45);

      ellipse(width / 2, height / 2, 200, 200);
      fill(255, 100);
      stroke(158, 214, 230);
      strokeWeight(10);
      ellipse(width / 2, height / 2, 200, 200);
      if (r <= 100) {
        r = r + 8;
        fill(255, 107, 107);
        noStroke();
        ellipse(width / 2 + r / 2, height / 2, r, r);
      } else if (r > 100) {
        count++;
        fill(255, 107, 107);
        noStroke();
        ellipse(width / 2 + r / 2, height / 2, 100, 100);
      }
      if (count > 60) {
        r = 38;
        flg = 0;
        count = 0;
        score = score + 1;
        cat=0;
      }
    }
  }
  
  
  //えの影
  fill(230, 80);
  noStroke();
  rect(0, height / 2 + 5, 70, 15);
  fill(220, 80);

  rect(0, height / 2 + 5, 70, 10);

  //ポイのえ
  fill(158, 214, 230);
  noStroke();
  rect(0, height / 2 - 5, 100, 15);
  print(flg);
  //score
  angleMode(DEGREES);
    translate(width-20, 0);
  rotate(90);
  textSize(20);
  fill(44, 169, 242);
  text(score + "  匹 め", 30,30);
  //rectMode(CENTER);
  //ポイの体力max80
if(hol===true){
  fill(220);
   rect(height/2-40,30,100,9,9);
   hurt-=2.5;
    hurtM=map(hurt,100,0,80,0);
    fill(0);
  if(hurtM>25){
    fill(088, 237, 152);
  }else{
      fill(250, 90, 90);
  }
    rect(height/2-40,30,hurtM,9,9,0,0,9);
}else{
  hurt=100;
}
  fill(0);
    
  
  
  
  
}
class W {
  constructor(x, y, xs, ys) {
    this.x = x;
    this.y = y;
    this.xs = xs;
    this.ys = ys;
  }
  move() {
    this.x = this.x + this.xs+random(-2,2);
    this.y = this.y - this.ys - 10;
  }
  display() {
    noStroke();
    fill(220, 80);
    ellipse(this.x - 46, this.y + 19, 42, 43);

    fill(220, 100);
    ellipse(this.x - 46, this.y + 19, 30, 30);
    //金魚
     fill(255, 107, 107);
 ellipse(this.x, this.y, 38, 38);
  
  }
  display_k(){
      fill(255, 107, 107);

    ellipse(this.x, this.y, 38, 38);
  }

  display2() {
    ellipse(this.x, this.y, 38, 38);
  }
  return() {
    if (this.y < 0 /*&& t>0.97*/) {
      this.y = height;
      this.x = random(width/4, 3*width/4);
      this.xs = random(-3, 3);
    }
  }
  flgtate() {
    if (
      width / 2 - 70< this.x &&
      width / 2 + 70 > this.x &&
      height / 2 - 70 < this.y &&
      height / 2 + 70 > this.y
    
    ) {
   
      flg = 1;
    } else {
      flg = 0;
    }
  }
}
