
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1370, 525);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options = {
		restitution:0.1,
		
		 }
		
		 ball= Bodies.circle(100,80,20,ball_options);
		World.add(world,ball)

		groundObj1=new Ground(width/2,500,width,20);
		groundObj2=new Ground(width/2,5,width,20);
		leftSide=new Ground(900,400,20,250);
		rightSide=new Ground(1300,400,20,250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("green");
  groundObj1.show();
  groundObj2.show();
  leftSide.show();
  rightSide.show();

  if(keyDown("space")){
	  ball_Force();
  }

 
  
  ellipse(ball.position.x, ball.position.y,20);
  drawSprites();
 
  Engine.update(engine);
}

function ball_Force(){
	Matter.Body.applyForce(ball,{x:1,y:0},{x:0.009,y:-0.02});
}