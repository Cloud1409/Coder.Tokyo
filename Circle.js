function Circle(x, y, radius){
  this.x = x;
  this.y = y;
  this.radius = radius;
};

Circle.prototype.isOverlapped = function(hinh2){
  var d = Math.sqrt(Math.pow((this.x - hinh2.x), 2)+ Math.pow((this.y - hinh2.y), 2));
  if(d > (this.radius + hinh2.radius)){
    return 1;
  }else if( d == (this.radius + hinh2.radius)){
    return 0;
  }else if( d < (this.radius + hinh2.radius)){
    return -1;
  }
}

module.exports = Circle;
