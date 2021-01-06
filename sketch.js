
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var enemyImg,enemy,playerImg,player,droneImg,droneImg1,drone,drone1,left,right,up,down;
var edges;

function preload(){
	droneImg = loadImage("images/player.png");
	droneImg1 = loadImage("images/enemy.png");
	enemyImg = loadImage("images/sam.png");
	playerImg=loadImage("images/john.png");
	
}

function setup() {
	createCanvas(800, 700);

	

    engine = Engine.create();
	world = engine.world;

	left=createButton("LEFT");
	left.position(700,95);
	left.mousePressed(lefts);

	right=createButton("RIGHT");
	right.position(645,95);
	right.mousePressed(rights);

	up=createButton("UP");
	up.position(685,75);
	up.mousePressed(ups);

	down=createButton("DOWN");
	down.position(675,115);
	down.mousePressed(downs);

	

	enemy = createSprite(80,530,20,20);
	enemy.addImage("enemy",enemyImg);
	enemy.scale=0.6;

	player = createSprite(720,530,20,20);
	player.addImage("player",playerImg);
	player.scale=0.6;

	drone = createSprite(720,250,20,20);
	drone.addImage("drone",droneImg);
	drone.scale=1;

	drone1 = createSprite(80,250,20,20);
	drone1.addImage("drone1",droneImg1);
	drone1.scale=1;
	drone1.velocityX=1;
	drone1.velocityY=1;

    edges=createEdgeSprites()


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);

  if(drone1.isTouching(drone)){
	  textSize(40);
	  text("OOPS!",400,350);
	  textSize(25);
	  text("YOU LOST",400,500);
	  drone1.velocityX=0;
	  drone1.velocityY=0;
	  drone.velocityX=0;
	  drone.velocityY=0;
  }

  
   drone1.bounceOff(edges);
   drone.bounceOff(edges);

  
  drawSprites();
 
}

function lefts(){
  drone.velocityX=2;
}

function rights(){
 drone.velocityX=-2;
}

function ups(){
  drone.velocityY=-2;
}
function downs(){
  drone.velocityY=2;
}

