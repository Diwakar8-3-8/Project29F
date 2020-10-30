const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var grnd;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var polygon;

function setup() {
  createCanvas(800,400);

  box1 = new Box(390,115,30,40);
  box2 = new Box(360,155,30,40);
  box3 = new Box(390,155,30,40);
  box4 = new Box(420,155,30,40);
  box5 = new Box(330,195,30,40);
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  box9 = new Box(450,195,30,40);
  box10 = new Box(300,235,30,40);
  box11 = new Box(330,235,30,40);
  box12 = new Box(360,235,30,40);
  box13 = new Box(390,235,30,40);
  box14 = new Box(420,235,30,40);
  box15 = new Box(450,235,30,40);
  box16 = new Box(480,235,30,40);
  box17 = new Box(270,275,30,40);
  box18 = new Box(300,275,30,40);
  box19 = new Box(330,275,30,40);
  box20 = new Box(360,275,30,40);
  box21 = new Box(390,275,30,40);
  box22 = new Box(420,275,30,40);
  box23 = new Box(450,275,30,40);
  box24 = new Box(480,275,30,40);
  box25 = new Box(510,275,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  sling = new Slingshot(this.polygon,{x:100,y:200});

}


function draw() {
  background(255,255,255);  
  drawSprites();
}