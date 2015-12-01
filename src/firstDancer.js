
var firstDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.position = 1;
};

firstDancer.prototype = Object.create(makeDancer.prototype);

firstDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
};