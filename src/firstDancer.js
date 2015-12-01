
var firstDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left,1000);
  this.position = 1;
  this.$node = $('<img src="../elf.png" class="square dancer"/>')
  this.setPosition();
  this.called = false;
  this.$node[0].status = true; 
};

firstDancer.prototype = Object.create(makeDancer.prototype); 

firstDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  console.log(this.$node[0].status)

  if(this.$node[0].status) {
    this.$node.animate({'top':'-=50'},500);
    this.$node.animate({'top':'+=50'},500);
  } else {
   this.$node.animate({'left':'-=50'},500);
   this.$node.animate({'left':'+=50'},500); 
  }
  
};

