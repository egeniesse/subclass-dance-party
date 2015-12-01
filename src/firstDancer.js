
var firstDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left,1000);
  this.position = 1;
  this.$node = $('<img src="elf.png" class="square dancer"/>')
  this.setPosition();
<<<<<<< HEAD
  this.stepInvoked = false;
=======
  this.called = false;
  this.$node[0].status = true; 
  this.closest = null; 
>>>>>>> f6ed417f8952e84aa14b46bcf39275af799afdc4
};

firstDancer.prototype = Object.create(makeDancer.prototype); 

firstDancer.prototype.step = function(){
<<<<<<< HEAD


  makeDancer.prototype.step.call(this);
  node = this;
  var danceFunc = function(){
    node.$node.animate({'left': '-=50'}, 500, function(){
      node.$node.animate({'left': '+=50'}, 500);
   });

  if(!node.stepInvoked){
    console.log('invoked')
    node.stepInvoked = true;
    console.log('called');
    //danceFunc();
    setInterval(function(){ danceFunc();}, 1000);
  }


  };
  
};
=======
  //makeDancer.prototype.step.call(this);

  if(this.$node[0].status) {
    this.$node.animate({'top':'-=50'},500);
    this.$node.animate({'top':'+=50'},500);
    this.step();
  } else {
   this.$node.animate({'left':'-=50'},500);
   this.$node.animate({'left':'+=50'},500);
   this.step(); 
  }
  
};

firstDancer.prototype.closest = function() {
  var closestNode = null; 
  for(var i = 0; i < window.squareDancers; i++) {
    if(squareDancers[i] !== this) {
      var height = Math.abs(this.top - squareDancers[i].top); 
      var width = Math.abs(this.left - squareDancers[i].left); 
      squareDancers[i].closest = Math.sqrt((height*height)+(width*width)); 
      if(squareDancers[i].closest < closestNode.closest || closestNode === null) {
        closestNode = squareDancers[i]; 
      }
    }
  }
  this.closest = closestNode; 
}
>>>>>>> f6ed417f8952e84aa14b46bcf39275af799afdc4
