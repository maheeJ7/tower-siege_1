const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;


function preload() {
    pentagonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(400,300,500,20);

    //level 1
    b1 = new Box(300,275,30,40);
    b2 = new Box(330,275,30,40);
    b3 = new Box(360,275,30,40);
    b4 = new Box(390,275,30,40);
    b5 = new Box(420,275,30,40);
    b6 = new Box(450,275,30,40);
    b7 = new Box(480,275,30,40);

    //level 2
    b8 = new Box(330,235,30,40);
    b9 = new Box(360,235,30,40);
    b10 = new Box(390,235,30,40);
    b11 = new Box(420,235,30,40);
    b12 = new Box(450,235,30,40);

    //level 3
    b13 = new Box(360,195,30,40);
    b14 = new Box(390,195,30,40);
    b15 = new Box(420,195,30,40);

    //level 4
    b16 = new Box(390,155,30,40);

    ball = Bodies.circle(50,100,20);
    World.add(world,ball);

    slingShot = new SlingShot(this.ball,{x:50,y:75});
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    stand.display();
    fill("skyBlue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
   fill("pink");
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    fill("lavender")
    b13.display();
    b14.display();
    b15.display();
    fill("grey")
    b16.display();
    imageMode(CENTER);
    image(pentagonImg,ball.position.x,ball.position.y,50,50);

    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body , {x:mouseX , y:mouseY });
    }

function mouseReleased(){
        slingShot.fly();
    }
