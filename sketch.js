
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var roofObject
var rope1,roof2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here
  roof2 = new roof(400,600,800,20)

	roofObject = new roof(360,150,300,20)
	
  bobObject1 = new bob(240,400,30)
	bobObject2 = new bob(300,400,30) 
	bobObject3 = new bob(360,400,30)
	bobObject4 = new bob(420,400,30)
  bobObject5 = new bob(480,400,30)
  
  rope1 = new Rope(bobObject1.body,roofObject.body,-bobDaimeter*2,0)
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rope1.display()
  roof2.display()
  roofObject.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  
 
}



