var space
var shuttle, shuttleImage
var asteroid, asteroidImage, asteroidGroup
var gameState = "play"
var restart, restartImage
var score=0

function preload() {
space= loadImage("space.jpeg")   
shuttleImage= loadImage("rocket.png")
asteroidImage = loadImage("Asteroid.png")
restartImage = loadImage("Restart-2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  shuttle= createSprite(100, windowHeight/2,20,20)
  shuttle.addImage(shuttleImage)
  shuttle.scale=0.12
  //shuttle.rotation=40
  //shuttle.debug= true
  shuttle.setCollider("rectangle",0,0,shuttle.width,shuttle.height-150)
  asteroidGroup = new Group()
  restart=createSprite(windowWidth/2,windowHeight/2)
  restart.addImage(restartImage)
  restart.scale=0.3
  restart.visible = false
}

function draw() {
  background(space);
  
  if (gameState === "play"){
    
    if(keyDown("up")){
  shuttle.y=shuttle.y-4
}
  
    if(keyDown("down")){
  shuttle.y=shuttle.y+4
}
spawnAsteroid();
    score = score+Math.round(frameCount/180)
    
    if (asteroidGroup.isTouching(shuttle)){
      gameState = "end"
    }
    
  }
  
  else if(gameState === "end"){
    restart.visible= true
    asteroid.visible= false
    shuttle.visible= false
    asteroidGroup.destroyEach()
    asteroidGroup.setVelocityXEach(0)
  }
  
drawSprites()
textSize(18)
fill("white")
text("SCORE:"+score,windowWidth-200,50)
}

function spawnAsteroid(){
  if(frameCount%75==0){
    
  asteroid= createSprite(windowWidth, Math.round(random(100,windowHeight-100,50,50)))
  asteroid.addImage(asteroidImage)
  asteroid.velocityX=-(6+score/400)
  asteroid.scale=0.12
  asteroidGroup.add(asteroid)
  //asteroid.debug=true
    asteroid.setCollider("circle")
    console.log(asteroid.velocityX)
}}