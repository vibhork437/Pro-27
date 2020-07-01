
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;
    
     backgroundimg = loadImage("newton.jpg")

	bob1 = new Bob(300,700,40)
	bob2 = new Bob(360,730,40);
	bob3 = new Bob(420,750,40);
	bob4 = new Bob(480,765,40);
	bob5 = new Bob(540,770,40);
	ground = new Roof(200,900,2000,30);
	roof = new Roof(300,500,600,30);

	rope1 = new Rope(bob1.body,roof.body,-200,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,100,0);
	rope5 = new Rope(bob5.body,roof.body,200,0);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 


	
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundimg);
  Engine.update(engine);

 

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 ground.display();

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 // drawSprites();
 
}











function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-215,y:-235});
	}
}
	



