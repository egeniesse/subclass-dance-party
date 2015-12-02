
var firstDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left,15);
  this.position = 1;
  this.toggle = false;
  this.$node = $('<img src="src/elf.png" class="square dancer"/>');
  this.setPosition();
  this.called = false;
  this.$node[0].status = true; 
  this.$node.nearest = null; 
  this.counter = 0;
  this.step();
  this.newLeft = null;

};

firstDancer.prototype = Object.create(makeDancer.prototype); 

firstDancer.prototype.step = function(){

  var up = function(inverse){
    inverse ? this.top++ : this.top--;
    inverse ? this.counter-- : this.counter++;


    
  }.bind(this);

  makeDancer.prototype.step.call(this);

    up(this.toggle);
    this.setPosition();
    if(this.counter === 100){
      this.toggle = true;
    } else if (this.counter === 0){
      this.toggle = false;
    }
  
  


  // if(this.$node[0].status) {
  //   this.$node.animate({'top':'-=50'},500);
  //   this.$node.animate({'top':'+=50'},500);
  //   setTimeout(function(){node.step();}, 1000);
  // } else {
  //  this.$node.animate({'left':'-=50'},500);
  //  this.$node.animate({'left':'+=50'},500);
  //  setTimeout(function(){node.step();}, 1000);  }
  
};

firstDancer.prototype.closestNode = function() {
  var closestNode = null; 
  for(var i = 0; i < window.squareDancers; i++) {
    if(squareDancers[i] !== this) {
      var height = Math.abs(this.top - squareDancers[i].top); 
      var width = Math.abs(this.left - squareDancers[i].left); 
      squareDancers[i].$node.closest = Math.sqrt((height*height)+(width*width)); 
      if(squareDancers[i].$node.closest < closestNode.$node.closest || closestNode === null) {
        closestNode = squareDancers[i]; 
      }
    }
  }
  this.$node.closest = closestNode; 
}

