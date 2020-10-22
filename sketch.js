
var monkey , monkey_running;
var banana ,bananaImage, stone, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   monkey = createSprite(70,285);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,320,600,10);
  FoodGroup= new  Group();
  ObstacleGroup = new Group();

  
}


function draw() {
  background(180);
  monkey.collide(ground)
  monkey.velocityY=monkey.velocityY+3;
  if(keyDown("space")&& monkey.y >= 260){
    monkey.velocityY=-25;
    
  }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time: "+survivalTime,100,50)
  bananas();
  stones();
  drawSprites();
  
}
function bananas(){
  if(frameCount%80===0){
    banana=createSprite(410,200);
    banana.addImage(bananaImage);
    var rand = Math.round(random(120,200));
    banana.y=rand;
    banana.velocityX=-4;
    banana.lifetime=300;
    banana.scale=0.1;
    FoodGroup.add(banana);
    
    
  }
  
}

function stones(){
  if(frameCount%300===0){
    stone=createSprite(410,285);
    stone.addImage(obstacleImage);
    var rand = Math.round(random(120,200));
    stone.velocityX=-4;
    stone.scale=0.2;
    stone.lifetime=600;
    ObstacleGroup.add(stone);
    
    
  }
  
}




