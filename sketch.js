const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgImage;
var box1,box2,box3,box4, box5;
var pig1, pig2;
var log1, log2,log3,log4;
var bird1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
     
    bgImage = loadImage("AB/bg.png");

    box1 = new Box(700,320,70,70)
    box2 = new Box(950,320,70,70);
    box3 = new Box(700,225,70,70);
    box4 = new Box(950,225,70,70);
    box5 = new Box(825,180,70,70);
    pig2 = new Pig(825, 225);
    log2= new Log(825,220,330,PI/2);
    pig1 = new Pig(825,320);
    log1 = new Log(825,260,330,PI/2);
    log3 = new Log(810,130,140,PI/6);
    log4 = new Log(930,130,140,-PI/8);
    bird1= new Bird(100,100);


    ground = new Ground(600,390,1200,20);
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();



}