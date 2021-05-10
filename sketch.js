
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,height,1200,20) ;

paper = new Paper(100,200,10) ; 

//bin1 = new Dustbin(490,640,20,100) ;
bin2 = new Dustbin(710,640,20,100) ;
bin3 = new Dustbin(630,650,200,20) ;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display()  ;
  paper.display() ;
  //bin1.display() ; 
  //bin2.display() ; 
  bin3.display() ; 
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})

}


}



