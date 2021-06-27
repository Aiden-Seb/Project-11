
function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  jaxonImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImage)
  path.scale=1.2
  jaxon = createSprite(200,360,20,20)
  jaxon.addAnimation("j1",jaxonImage)
  jaxon.scale=0.08
  leftb=createSprite(0,0,100,800)
  rightb=createSprite(400,0,100,800)
  leftb.visible = false
  rightb.visible = false
}

function draw() {
  background(0);
  path.velocityY=4
  if(path.y>400){
    path.y=height/2
  }
  jaxon.x=mouseX
  edge=createEdgeSprites()
  jaxon.collide(edge[3])
  jaxon.collide(leftb)
  jaxon.collide(rightb)
  drawSprites()
}
