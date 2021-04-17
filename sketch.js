var bg,bgImg;
var cat,catImg,catImg2;
var mouse,mouseImg,mouseImg2;



function preload() {
    //load the images here
    catImg = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg=loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    bgImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //bg = createSprite(0,0,1000,800);
    //bg.addImage("background",bgImg);

    //create tom and jerry sprites here
    cat = createSprite(850,600);
    cat.addAnimation("cat",catImg)
    mouse = createSprite(200,600);
    mouse.addAnimation("mouse",mouseImg);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<=cat.width/2+mouse.width/2){
        cat.addAnimation("catHappy",catImg);
        mouse.addAnimation("mouseHappy",mouseImg);
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");

  }


}

