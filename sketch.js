
//Engine, World and Bodies
// namespace
const Engine = Matter.Engine; // create the physics engine - controller
const World = Matter.World;  // create the physical world and add objects to it
const Bodies = Matter.Bodies; // create the physical objects which inhabit the world

var engine, world; // variable for our engine and world - myEngine, myWorld
var box1;
var box2;
var ground;



function setup() {
  createCanvas(400,400);
  engine = Engine.create(); // create method allows us to create our engine
  world = engine.world; // .world is the property 

  box1 = new Box(200,300,50,50);
  box2 = new Box (240,100,50,100)
  ground = new Ground(200,390,400,20)
  console.log(box1);
  console.log(box2);
  console.log(ground);
}

function draw() {
  background(0,0,0);  //r,g,b 0-255
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
}

                                     
