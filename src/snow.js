var snow = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, Math.random() * 25, left, (Math.random() * 400) + 100); 
  this.$node = $('<span class="snow dancer"></span>');
  this.setPosition(); 
}

snow.prototype = Object.create(makeDancer.prototype);

snow.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.top += 10; 
  this.setPosition(); 
}

