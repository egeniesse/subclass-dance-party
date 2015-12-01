var lineup = function() {
  for (var i = 0; i < window.dancers.length; i++){
    // var height = window.dancers.length/ (i +1);
    // window.dancers[i].$node.animate({'top': ''}, 'slow');
    window.dancers[i].lineUp(); 
  }
};