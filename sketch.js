var fighter;
var gameState=0;
var PLAY=0;
var STOP=1;
var fighterImage;
var back;
var score=0;
var backImage;
var starf;
var starfImage;
var starfG;
var shipG;
var shipImage;
var ship1G;
var ship2G;
var ship3G;
var ship4G;
var ship;
starwarsImage;
var laserG;
function preload(){
fighterImage=loadImage("star.png");
backImage=loadImage("bdd.jpg");
shipImage=loadImage("tiefighter.png");
starfImage=loadImage("j.png");
starwarsImage=loadImage("starwars.jpg")
}
function setup() {
  createCanvas(600,600);
  back=createSprite(300,300,600,600);
  back.addImage(backImage);
  back.scale=4;
  fighter=createSprite(300,480,20,20);
  fighter.addImage(fighterImage);
  shipG= new Group();
  ship1G= new Group();
  ship2G= new Group();
  ship3G= new Group();
  laserG= new Group();
  starfG= new Group();
  fighter.scale=0.24;
}

function draw() {
  background("red");
    if(gameState===PLAY){
      if(frameCount%120===0){
     starf=createSprite(300,0,20,20);
     starf.addImage(starfImage);
     starf.velocityY=+3;
     starf.lifetime=600;
     starfG.add(starf);
     starfG.scale=6;
      }
      if(starfG.isTouching(fighter)){
        starfG.destroyEach();
        gameState=STOP;
      }
      if(laserG.isTouching(ship2G)){
        laserG.destroyEach();
        ship2G.destroyEach();
        score=score+1;
      }
      if(laserG.isTouching(starfG)){
        laserG.destroyEach();
        starfG.destroyEach();
        score=score+100;
      }
      if(laserG.isTouching(shipG)){
        laserG.destroyEach();
        shipG.destroyEach();
        score=score+1;
      }
      if(shipG.isTouching(fighter)){
        gameState=STOP;
        fighter.visible=false;
        shipG.visible=false;
      }
      if(ship2G.isTouching(fighter)){
        gameState=STOP;
        fighter.visible=false;
        ship2G.visible=false;
      }
      if(keyDown("left")){
        fighter.x=fighter.x-3;
      }
      if(keyDown("right")){
        fighter.x=fighter.x+3;
      }
      if(keyWentDown("enter")){
      var laser=createSprite(fighter.x,380,7,40)
      laser.shapeColor="red";
      laser.velocityY=-3;
      laserG.add(laser);
      }
    if(frameCount%150===0){
    ship =createSprite(Math.round(random(40,550)),0,20,20);
    ship.velocityY=+2;
    ship.addImage(shipImage);
    ship.scale=0.6;
    ship.lifetime=200;
    shipG.add(ship);
    }
    
    /*if(frameCount%150===40){
       var ship1 =createSprite(Math.round(random(40,550)),0,20,20);
      ship1.velocityY=+3;
      ship1.addImage(shipImage);
      ship1.scale=0.6;
      ship1.lifetime=200;
      ship1G.add(ship1);
      }*/
      
    if(frameCount%150===50){
      var ship2 =createSprite(Math.round(random(40,550)),0,20,20);
      ship2.velocityY=+3;
      ship2.addImage(shipImage);
      ship2.scale=0.6;
      ship2.lifetime=200;
      ship2G.add(ship2);
      }
      
    
   }
   
  if(gameState===STOP){
    var back1=createSprite(300,300,600,600);
    back1.addImage(starwarsImage);
    back.visible=false;
    text("GAME OVER !!!!",270,200)
    ship2G.visible=false;
    shipG.visible=false;
   back1.scale=1.3;
   }
  drawSprites();
 
   text("Score: "+score,280,20);
}