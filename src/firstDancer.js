
var firstDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.position = 1;
  this.$node = $('<span class="square dancer"></span>')
  this.setPosition();
};

firstDancer.prototype = Object.create(makeDancer.prototype); 

firstDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  //console.log(this.position)
  var node = this;
  //if(this.position === 1){
  // if(!this.status) {
     this.$node.animate({'top':'-=50'});
  //   (function(){console.log('this ran')})()
  //   this.status = true; 
  // } else {
    this.$node.animate({'top':'+=50'});
    // console.log('this also');
    // this.status = false; 
  //}    
  //}
  //   this.position ++;
  // } else if (this.position === 2){
  //   this.$node.animate({'left': '+= 50'}, this.timeBetweenSteps)
  //   this.position ++;
  // } else if (this.position === 3){
  //   this.$node.animate({'top': '+= 50'}, this.timeBetweenSteps)
  //   this.position ++;
  // } else {
  //   this.$node.animate({'left': '-= 50'}, this.timeBetweenSteps)
  //   this.position = 1;
  // }
  // this.setPosition()
};