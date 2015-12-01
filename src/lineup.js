var lineup = function() {
  for (var i = 0; i < window.squareDancers.length; i++){
    // var height = window.dancers.length/ (i +1);
    // window.dancers[i].$node.animate({'top': ''}, 'slow');
    window.squareDancers[i].lineUp(); 
  }
};