const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1
var arms1, armimg
var playerImg
var enemy,enemimg, enemyGroup
var leftedge  
var score =0 
var y
var restart, restartImg
var scores ,scorimg
var PLAY = 0
var END =1
var smashg,smgimg
var gameState = PLAY
var gameState = END
var g_o_n, g_o, hit
var bg

function preload(){
  playerImg = loadImage("Images/player_rightlook.png")
  enemimg = loadAnimation("Images/enemy_leftrun.png","Images/player_leftlook.png")
  restartImg = loadImage("Images/g_o1.png")
  scorimg = loadImage("Images/Score.png")
  armimg = loadImage("Images/armimg.png")
  smgimg = loadImage("Images/ICON.png")
  g_o_n = loadSound("gameover.mp3")
  g_o = loadSound("gameover.wav")
  hit = loadSound("hit.mp3")
  bg = loadImage("Images/bg.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  
  giant = new Ground(120,height/2,200,500,true,"grey",playerImg)
  
  arms1 = createSprite(370,height/2,60,60)
  arms1.addImage(armimg)
  arms1.scale = 0.4
  scores = createSprite(140,80,20,20)
  scores.addImage(scorimg)
  scores.scale=0.2

  smashg = createSprite(700,600)
  smashg.addImage(smgimg)
  smashg.scale = 0.4

  // enemy1 =  createSprite(750,410,50,50)
  // enemy1.addAnimation("attack1",enemimg)
  leftedge = createSprite(250,height/2,40,height)
  leftedge.visible= false


  enemyGroup = new Group()
  
}

function draw() {
  background(bg);  
  Engine.update(engine);
  giant.display()
  
  
    restart = createSprite(700, 400 , 60,60)
    restart.addImage(restartImg)
    restart.scale = 0.5

    restart.visible = false

  // arms1.x = mouseX
  // arms1.y = mouseY

  spawnE()

  textSize(42)
  fill("white")
  text(score,250,110)
  

  for (var i = 0; i < enemyGroup.length; i++) {
    if (enemyGroup.get(i).isTouching(leftedge)) {
  
        text("Game Over. Press Reload to restart",450,400)
        // restart.visible = true

        g_o_n.play()
        g_o.play()
        enemyGroup.destroyEach();

        
     
        
    }
    if (enemyGroup.get(i).isTouching(arms1)) {
      enemyGroup.get(i).destroy();
      hit.play()
      score = score+5
      // if(score = 100){
        // enemyGroup.get(i).setVelocityXEach=enemyGroup.get(i).setVelocityXEach-3
      // }
   
      

  }

  if(keyDown(UP_ARROW)){
    arms1.velocityY = -25
  }else if(keyDown(DOWN_ARROW)){
    arms1.velocityY = 25
  }else{
    arms1.velocityY = 0
  }
  // if(gameState===END){
  //    enemyGroup.destroyEach()
  //    enemyGroup.setVelocityXEach(0);
  //    arms1.destroy()

  //    restart.visible = true

     
  //    if(mousePressedOver(restart)){
  //      gameState=PLAY
  //      restart.visible = false
  //    }

   }

  drawSprites()

  }


function spawnE() {
  //write code here to spawn the clouds
  if (frameCount % 9 === 0) {
    enemy = createSprite(1200,y,40,10);
    y = Math.round(random(80,500));
    enemy.addAnimation("attack1",enemimg);
    
    enemy.velocityX = -(16+score/100);
    
     
    enemyGroup.add(enemy);
  }
  
}