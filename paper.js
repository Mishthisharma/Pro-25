class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
        this.image = loadImage("Sprites/paper(1).png")
	    World.add(world, this.body);
       
        
   }
   display(){
    fill("red");
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,33,33);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}
