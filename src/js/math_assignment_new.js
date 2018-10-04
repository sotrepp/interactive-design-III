//Javascript containing functions that calculates a math problems and styling for the page


// this function will fade in elements on the page
function fadeIn () {
    
    //get the elements I wish to fade in.
    var solutionFade = document.getElementById("solution");
    var answerFade = document.getElementById("answer");
    
    // add an animation property to the elements' css. 
    solutionFade.style.animation = "fadeIn 1s linear forwards";
    answerFade.style.animation = "fadeIn 1s linear 1.5s forwards";
}

// this function will calculate the result of a math problem. 

function calculateQuestion () {
    // define some variables with values we were given by the math problem. 
    var amrakAvgSpeed = 55;
    var amrakCompletionTime = 4.2;
    var acelaCompletionTime = 3.5;
    // calculate the total distance to Boston. 
    var distanceToBoston = amrakAvgSpeed*amrakCompletionTime;
    // calculate the average speed to Boston with the Acela train. 
    var acelaAvgSpeed = distanceToBoston/acelaCompletionTime;
    
    //console.log(acelaAvgSpeed)
    
    // get the div in which we wish to write out the answer into. 
    var answerDiv = document.getElementById("answer");
    // write the answer into the div. 
    answerDiv.innerHTML = "The answer is therefore that the Acela train travels at an average speed of 66 miles/hour."
    
    // call the fade in function to make the newly written answer fade in. 
    fadeIn ()
    
}



