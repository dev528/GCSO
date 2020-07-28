var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  

  speed=random(50,90);
  weight=random(400,1000)

  car = createSprite(50,200,50,80);
  car.velocityX=speed;
wall=createSprite(1000,200,60,height/2);
wall.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  

  if (wall.x-car.x<(car.width+wall.width/2)) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/2
    
    if (deformation>100){
    car.shapeColor="red";
  }

  if (deformation<100&&deformation>100){
    car.shapeColor="yellow";
  }
  
  if (deformation<100){
    car.shapeColor="green";
  }

}

drawSprites();

}
