// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition();
  this.step();
  this.linedUp = false; 

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

};

makeDancer.prototype.lineUp = function(){
  
  if(this.linedUp) {
    console.log('running')
    this.newLeft  = this.newLeft || Math.floor($("body").width() * Math.random());
    if(this.left < this.newLeft){
      this.left++;
      setTimeout(function(){this.lineUp()}.bind(this), 0.5);
    } else if (this.left > this.newLeft){
      this.left--;
      setTimeout(function(){this.lineUp()}.bind(this), 0.5);
    } else {
      this.linedUp = false;
      this.newLeft = null;
    }
    this.setPosition(); 
  } else {
    if (this.left === 50){
      this.linedUp = true;
    } else if (this.left > 50){
      this.left -= 1;
      setTimeout(function(){this.lineUp()}.bind(this), 0.5);
    } else if(this.left < 50){
      this.left += 1;
      setTimeout(function(){this.lineUp()}.bind(this), 0.5);
    }
    setTimeout(function(){}, 15);
    this.setPosition();

  } 
  //this.setPosition();
};

makeDancer.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var fn = function () {
    this.step(); 
  }.bind(this); 
  var time = this.timeBetweenSteps;
  setTimeout(fn, time); 
};



