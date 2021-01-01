const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var engine,world;
var ball;
var spring;
var ground;
var groudhovering;
var polygonimg;


function setup (){
createCanvas(1200,500);

engine = Engine.create();
world = engine.world;

box1 = new BOX (700,390,30,30);
box2 = new BOX (700,390,30,30);
box3 = new BOX (700,390,30,30);
box4 = new BOX (700,390,30,30);
box5 = new BOX (700,390,30,30);
box6 = new BOX (700,390,30,30);
box7 = new BOX (700,390,30,30);

box8 = new BOX (650,360,30,30);
box9 = new BOX (650,360,30,30);
box10 = new BOX (650,360,30,30);
box11 = new BOX (650,360,30,30);
box12 = new BOX (650,360,30,30);

box13 = new BOX (600,330,30,30);
box14 = new BOX (600,330,30,30);
box15 = new BOX (600,330,30,30);

box16 = new BOX (600,330,30,30);
var a = {
  density:1,
  frictionAir:0.005,

}
ball = Bodies.circle(500,200,20,a);
World.add(world,ball)

spring = new PROJECTILE (this.ball,{x:500,y:20});

ground = new PLATFORM (0,495,5000,20);



}
 function draw (){
 background("orange");
 Engine.update(engine);
 ground.display();


 
 debug:true;

  box1.display();  
  box2.display();  
  box3.display();
  box4.display();  
  box5.display();  
  box6.display();  
  box6.display();
  box7.display();  
  box8.display();  
  box9.display();  
  box10.display();
  box11.display();  
  box12.display();  
  box13.display();  
  box14.display();  
  box15.display();  
  box16.display();  

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40);


  spring.display();
}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
