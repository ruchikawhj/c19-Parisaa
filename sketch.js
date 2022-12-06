var ninja,ninjaImg;
var bg,bgImg;

function preload(){
ninjaImg=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
bgImg=loadImage("landscape1.jpg");
}

function setup(){
  createCanvas(1000,600);
  bg=createSprite(500,300);
  bg.addImage(bgImg);
  bg.scale=2;
  ninjaImg.frameDelay=10;
  ninja=createSprite(80,500);
  ninja.addAnimation("running",ninjaImg);
  ninja.scale=0.4;
  


}

function draw(){
background(100);
drawSprites();
}