class Rope{
   constructor(body1,body2,offsetX,offsetY)
{    
    var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 10
} 
  

    
     this.offsetX=offsetX
     this.offsetY=offsetY
     var opt={
         bodyA:body1,
         bodyB:body2,
         pointB:{x:this.offsetX,y:this.offsetY}
     }
     this.rope=Constraint.create(options)
     World.add(world,this.rope)
}
display(){
    
  
    stroke(6)
    line(pointA.x, pointA.y, point2.x, point2.y);

}
}