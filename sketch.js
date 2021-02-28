const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
//preload the images here
bgimage = loadImage("GamingBackground.png");
monster  = loadImage("Monster-01.png");
}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
    world = engine.world;
    ground  = new Ground(510,400,230,20);
  hero = new Hero(40,100,250);
  mons = new Monster(900,100,250)
  rope = new Rope(hero.body,{x:40,y:40});

  b1 = new Block (420,380,40,40);
  b2 = new Block (420,340,40,40);
  b3 = new Block (420,300,40,40);
  b4 = new Block (420,260,40,40);
  b5 = new Block (420,220,40,40);
  b6 = new Block (420,180,40,40);
  b7 = new Block (420,140,40,40);
  b8 = new Block (420,100,40,40);

  b9 = new Block (480,380,40,40);
  b10 = new Block(480,340,40,40);
  b11= new Block (480,300,40,40);
  b12= new Block (480,260,40,40);
  b13= new Block (480,220,40,40);  
  b14= new Block (480,180,40,40);
 
  b15 = new Block (540,380,40,40);
  b16 = new Block (540,340,40,40);
  b17 = new Block (540,300,40,40);
  b18 = new Block (540,260,40,40);
  b19 = new Block (540,220,40,40);
  b20 = new Block (540,180,40,40);
  b21 = new Block (540,140,40,40);
  b22 = new Block (540,100,40,40);
  b23 = new Block (540,60,40,40);

  b24 = new Block (600,380,40,40);
  b25 = new Block (600,340,40,40);
  b26 = new Block (600,300,40,40);
  b27 = new Block (600,260,40,40);
  b28 = new Block (600,220,40,40);
  b29 = new Block (600,180,40,40);
  b30 = new Block (600,140,40,40);
}

function draw() {
  background(bgimage);
  Engine.update(engine);
hero.display();
mons.display();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();

b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();

b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b23.display();

b24.display();
b25.display();
b26.display();
b27.display();
b28.display();
b29.display();
b30.display();

//ground.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
