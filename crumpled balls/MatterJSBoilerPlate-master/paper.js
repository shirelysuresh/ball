class Paper {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
   
    rectMode(CENTER);
    fill(255);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
  
  }
};