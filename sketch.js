var jake , jake1;
var rail2,rail3, railImage;
var train ,train2,train3, trainImage
var trainGroup1,trainGroup2,trainGroup3
var light,lightImage,lightGroup
var coinImage , coin , coinGroup1 , coinGroup2
var  score , coinScore
var gameState
var PLAY = 1
var END = 0
//var rail1

function preload(){
jake1 = loadAnimation("running 1.png","running 4.png","running 5.png","running 6.png");
  railImage = loadImage("rail.png");
  trainImage =  loadImage("train2.png");
  lightImage = loadImage("traffic light.png")
  roadImage = loadImage("road.png")
  coinImage = loadImage("coin.png")
}

function setup() {
createCanvas(windowWidth,windowHeight);

score = 0
coinScore = 0

  road = createSprite(width/2,height/2)
  road.addImage(roadImage)
  road.scale = 3
  road.velocityY =5
 
  // rail1 = createSprite(width/2,height/2+90)
  // rail1.addImage(railImage);
  // rail1.velocityY =1;
  
   rail2 = createSprite(width/1.2, height/2+90)
  rail2.addImage(railImage);
  rail2.velocityY =5
 
  

  gameState = PLAY;
  

  rail3 = createSprite(width/5.2, height/2+90)
  rail3.addImage(railImage);
  rail3.velocityY =5
  
  
  trainGroup1 = new Group();
  trainGroup2 = new Group();
  trainGroup3 = new Group();
  lightGroup = new Group();
  coinGroup1 = new Group();
  coinGroup2 = new Group();
    
  jake = createSprite(width/1.2,height-50)
  jake.addAnimation("running",jake1)
  
}

function draw() {
  background("white")

if (gameState === PLAY) {

  if (keyDown("right_arrow")&&jake.x === rail3.x){
    jake.x = rail2.x
  }

    if (keyDown("left_arrow")&&jake.x === rail2.x){
      jake.x = rail3.x
    }

 // if (keyDown("left_arrow")&&jake.x === rail1.x){
  //   jake.x = rail3.x
  // }



  var select_rail = Math.round(random(1,2))
  if (World.frameCount % 150 == 0) 
      {
        if (select_rail == 1) 
        {
          spawnTrain1();
        } 
         else 
        {
         spawnTrain3();
        }
      } 


      var select_coin = Math.round(random(1,2))
  if (World.frameCount % 130 == 0) 
      {
        if (select_coin == 1) 
        {
          spawncoin1();
        } 
         else 
        {
         spawncoin2();
        }
      } 



 // if(rail1.y>height-180)
  // {rail1.y = height/2+80}

  if(rail2.y>height-180)
  {rail2.y = height/2+80}

  if(road.y>height-180)
  {road.y = height/2}
  
  if(rail3.y>height-180)
  {rail3.y = height/2+80}

  if (jake.isTouching(trainGroup1)||jake.isTouching(trainGroup2)) {
    gameState = END
  }


  if (jake.isTouching(coinGroup1)) {
    coinGroup1.destroyEach()
    coinScore = coinScore+1
  }

  if (jake.isTouching(coinGroup2)) {
    coinGroup2.destroyEach()
    coinScore = coinScore+1
  }
 
  score = score + Math.round(getFrameRate()/60);

  spawnLight()
  

 

  drawSprites();

  stroke(255,155,125)
  strokeWeight(2)
  fill("red")
  textSize(30)
 text("coin:"+coinScore,width/4.5,height-height+30)
 text("score:"+score,width/2.5,height/height+30)

  
}else if (gameState === END) {
  stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", width/2,height/2)
}

}

  



function spawnTrain1()
{
 
    train = createSprite(width/5.5,height-height-300);
    train.addImage(trainImage)
    train.velocityY =20
    train.scale =4
trainGroup1.add(train)
}

// function spawnTrain2()
// {
 
//     train2 = createSprite(width/2,height-height-300);
//     train2.addImage(trainImage)
//     train2.velocityY = 10
//  trainGroup2.add(train2)
// }

function spawnTrain3()
{
 
    train3 = createSprite(width/1.2,height-height-300);
    train3.addImage(trainImage)
    train3.velocityY =20
    train3.scale = 4
 trainGroup2.add(train3)
}

function spawncoin1()
{
  coin = createSprite(rail3.x , height-height-10)
  coin.addImage(coinImage)
  coin.velocityY =20

  coin.scale = 0.2
  coinGroup1 . add(coin)
}

function spawncoin2()
{
  coin = createSprite(rail2.x , height-height-10)
  coin.addImage(coinImage)
  coin.velocityY = 20
  coin.scale = 0.2
  coinGroup2 . add(coin)
}




function spawnLight()
{
  if (World.frameCount%200 === 0) {
    light = createSprite(Math.round(random(width/1.5,width/4.5)),height-height-20)
    light.addImage(lightImage)
    light.velocityY = 4;
    lightGroup.add(light);
  }}
