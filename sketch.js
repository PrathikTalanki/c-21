var fixedRect, movingRect, rect1, rect2



function setup() {
  createCanvas(800,400);
fixedRect = createSprite(200,200,50,80);
movingRect = createSprite(400,200,80,30);
rect1 = createSprite(600,100,50,80);
rect2 = createSprite(600,600,80,30);

rect1.shapeColor = "blue";
rect2.shapeColor = "blue";

fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";

rect1.velocityY = 5;
rect2.velocityY = -5;



}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
      fixedRect.shapeColor = "red";
       movingRect.shapeColor = "red";

    }else{
    fixedRect.shapeColor = "green";
     movingRect.shapeColor = "green";
  }
  bounceOff(rect1, rect2);
  drawSprites();

}


