var canvas, backgroundImage;

var gameState = 0;
var player, wall, laser;


function setup(){
  canvas = createCanvas(1500, 1500);

  wall1 = new Wall(10,70);
  wall2 = new Wall(100,50);
  wall3 = new Wall(80,130);
  wall4 = new Wall(50,250);
  wall5 = new Wall(130,210);
  wall6 = new Wall(10,250);
  wall7 = new Wall(160,120);
  wall8 = new Wall(150,20);
  /*wall9 = new Wall(250,70,20,100);
  wall10 = new Wall(270,150,100,20);
  wall11 = new Wall(330,50,100,20);
  wall12 = new Wall(340,125,20,100);
  wall13 = new Wall(220,250,20,100);
  wall14 = new Wall(330,210,150,20);
  wall15 = new Wall(100,300,20,100);
  wall16 = new Wall(180,310,100,20);
  wall17 = new Wall(30,352,20,100);
  wall18 = new Wall(175,352,20,100);
  wall19 = new Wall(280,290,20,100);
  wall20 = new Wall(350,270,120,20);
  wall21 = new Wall(250,390,100,20);
  wall22 = new Wall(330,370,20,100);*/

     
}


function draw(){

  background("white");
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall8.display();
  wall7.display();
  wall6.display();

  
  drawSprites();

 
}

