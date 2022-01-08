var fire,robot


function preload(){
  robotImg= loadImage("Yanshee robot.png")
  fImg = loadImage("402-4026126_fireball-transparent-png-sprite-fireball-clipart.png")
}

function setup() {
  createCanvas(800,400);
  robot=createSprite(50,360, 50, 50);
// fireball=createSprite(750,random(100,300), 10, 10);
}

function draw() {
  fireSpawner()
  if(keyDown("UP_ARROW")||touches.length>0){
    robot.y = robot.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   robot.y = robot.y+30
  }
  robot.addImage(robotImg)
  robot.scale=0.09
  //fireball.velocityx=9
  background("red");  
  drawSprites();
}

function fireSpawner(){
  if(frameCount%35 == 0){
  fire = createSprite(windowWidth-50,random(50,350),10,10)
 // fire.addImage(fImg)
  //fire.scale=0.2
  fire.velocityX=-3
  fire.lifetime =800
 
  }
  }