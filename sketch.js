
var backImg, pick, pickImg,knife,knifeImg;


function preload(){
 backImg= loadImage("images/bg2.jpg");
 pickImg = loadImage("images/sad.png");
 cookiesImg = loadImage("images/cookie.png");
   }


function setup() {
  createCanvas(1200,700);

 

  pick= createSprite(455,637, 50, 50);
  pick.addImage(pickImg);
  pick.scale= 0.2;

  ground = createSprite()

 

  

  
  


  
}



function draw() {
  background(backImg);  

  
 if(keyDown(RIGHT_ARROW)){
  pick.x= pick.x+6;
 }

 if(keyDown(LEFT_ARROW)){
  pick.x= pick.x-6;
}
  
  

 
 
  Cookie();
  
  drawSprites();
  textSize(25);
  stroke("white");
  text(mouseX + "," + mouseY, 30,30);
}

function Cookie(){
  if(frameCount%80===0){
    var cookie =createSprite(10,200,20,20);
    cookie.addImage("cookie",cookiesImg);
    cookie.scale = 0.3;

    cookie.x= random(20,1000);
    cookie.velocityY= 8;

  }
}