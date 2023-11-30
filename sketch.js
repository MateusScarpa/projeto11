var sea, ship;
var seaImg, shipImg1;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png", "ship-4.png");


}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,180,400,20);
  sea.addImage("mar",seaImg);
  sea.x = sea.width /2;
  sea.velocityX = -4;

  ship = createSprite(190,200,20,50);
  ship.addAnimation("navegar", shipImg1);
  ship.scale = 0.5;

}

function draw() {
  background(400);
    drawSprites();

 
}
