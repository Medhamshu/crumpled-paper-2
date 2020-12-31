class crumpledpaper
{
 constructor(x,y)
  {
    var options = {
        'isStatic':false,
        'friction': 1.0,
        'restitution':0.5,
        'density':1.2,
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.radius = 40;
      World.add(world, this.body);  
  }
 display()
 {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('yellow');
    fill('yellow');
    circleMode(CENTER);
    rect(0, 0, this.radius);
    pop();
 }

}