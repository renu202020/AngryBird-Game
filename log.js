class Log extends Base {
    constructor(x, y, height, angle) {
     super(x,y,20,height,angle);
     this.image= loadImage("AB/wood2.png");
      Matter.Body.setAngle(this.body,angle);
      }

  };
  