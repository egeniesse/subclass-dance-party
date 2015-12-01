
var firstDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.position = 1;
  this.$node = $('<span class="square dancer"></span>')
  this.setPosition();
  this.stepInvoked = false;
};

firstDancer.prototype = Object.create(makeDancer.prototype);

firstDancer.prototype.step = function(){


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