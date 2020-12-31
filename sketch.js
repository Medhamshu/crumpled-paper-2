const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new crumpledpaper(200,200);
	ground = new Ground(600,height-30,1200,20);

    Engine.run(engine);
  
}

function draw()
{
  background(0)
  Engine.update(engine);

  paper.display();
  ground.display();

  drawSprites();

}
