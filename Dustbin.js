class Dustbin {
    constructor(x, y, width, height) {
      var options = {
        'isStatic':true,   
        'restitution': 0.8,
        'friction': 0.3,
        'density': 1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("dustbingreen.png") ;
      this.width = width;
      this.height = height;
  
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle ; 
      push()
      translate(pos.x,pos.y)
      rotate(angle) ;
      imageMode(CENTER);
      fill("green");
      image(this.image,0,-50, 240, 200);
      pop() ; 
     
  
    }
  };