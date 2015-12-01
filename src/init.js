$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var amount = 1; 
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if(dancerMakerFunctionName === 'snow') {
      amount = 200;  
    }

    if(dancerMakerFunctionName === 'lineup') {
      dancerMakerFunction(); 
    } else {
    // make a dancer with a random position
      for(var i = 0; i < amount; i++) {
        var dancer = new dancerMakerFunction(
          $("body").height() * Math.random(),
          $("body").width() * Math.random(),
          Math.random() * 1000);

          if(dancerMakerFunctionName !== 'snow') {
            window.dancers.push(dancer); 
            console.log(dancers);
          }
        $('body').append(dancer.$node);
      }; 
    }  
    

    
  });
});

