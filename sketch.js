var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}
function createapple() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.7;
  apple.velocityY = 3
  apple.lifetime = 150
}
function createOrange() {
  orangeL = createSprite(random(50,350),40,10,10);
  orangeL.addImage(appleImg);
  orangeL.scale = 0.8;
  orangeL.velocityY = 3
  orangeL.lifetime = 150
}
function createRed() {
  redL = createSprite(random(50,350),40,10,10);
  redL.addImage(appleImg);
  redL.scale = 0.8;
  redL.velocityY = 3
  redL.lifetime = 150
  }
function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
var select_sprites = Math.random(random(1,3))

if (flameCount % 80 == 0) {
   if (select_sprites == 1){
    createapple();
   } else if (select_sprites == 2){
      createOrange();
   } else {
      createRed();
   }
  }

rabbit.x = Word.mauseX;
