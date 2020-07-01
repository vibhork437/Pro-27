class Bob{
    constructor(x,y,radius){

    var options={
        'restitution':1.0,
        'friction':10.0,
        'density':0.8,
        isStatic:false
    }
    this.body=Bodies.circle(x,y,radius,options)
    this.radius = radius
   // this.image = loadImage("paper.png");
    World.add(world,this.body)

}

    display(){
       var pos = this.body.position
      var  angle = this.body.angle
         push();
         translate(pos.x,pos.y)
         rotate(angle)
         rectMode(CENTER)
        fill("red")
         circle(0,0,this.radius)
         //imageMode(CENTER);
        // image(this.image,0,0,40);
         pop();
        
    }

};