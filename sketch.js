var wall, bullet
var speed, weight
var damage, thickness
var bulletRightEdge, wallLeftEdge

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = (80,80,80)

  bullet = createSprite(50,200,40,10)
  bullet.shapeColor = "white"

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

}

function draw() {

  background("black"); 
  
  bullet.velocityX = speed

  //console.log(deformation)

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)

  if(hasCollided(bullet, wall)){

      bullet.velocityX = 0
  
      if(damage <= 10 )
      {
        bullet.shapeColor = "green"
      }
    
      if(damage > 10 )
      {
        bullet.shapeColor = "red"
      }  

      bullet.collide(wall)
  }
  
  

  drawSprites();
}

function hasCollided(lbullet, lwall){
    bulletRightEdge = lbullet.x + lbullet.width
    wallLeftEdge = lwall.x
    if(bulletRightEdge >= wallLeftEdge){
        return true
    }
    else{
      return false
    }
}