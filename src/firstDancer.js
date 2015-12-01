
var firstDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.position = 1;
  this.$node = $('<span class="square dancer"></span>')
  this.setPosition();
};

firstDancer.prototype = Object.create(makeDancer.prototype);

firstDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  if(this.position === 1){
    this.top -= 50;
    this.position ++;
  } else if (this.position === 2){
    this.left += 50;
    this.position ++;
  } else if (this.position === 3){
    this.top += 50;
    this.position ++;
  } else {
    this.left -= 50;
    this.position = 1;
  }
  this.setPosition();
};