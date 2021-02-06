
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var bob1,bob2,bob3,bob4,bob5;
var wall1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
  var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
	//Create the Bodies Here.
  wall1 = new Wall (400,100,500,30);
    bob1 = new Bob (180,500,100);
    bob2 = new Bob (280,500,100);
	bob3 = new Bob (380,500,100);
	bob4 = new Bob (480,500,100);
	bob5 = new Bob (580,500,100);
   rope1 = new Rope (bob1,wall1,400,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  wall1.display();
  rope1.display();
  drawSprites();
 
}



