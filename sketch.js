
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new Roof(400,50,600,30);
	bobObject1=new Bob(400,400,70);
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	bobObject2=new Bob(470,400,70);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(255);
  
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  rope1.display



  drawSprites();
 
}



