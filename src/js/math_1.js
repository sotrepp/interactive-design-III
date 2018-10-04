function calculate () {
    
    var milesperGallon = 16;
    var totalMile = 200;
    var gallons_used = totalMile/milesperGallon;
    
    console.log(gallons_used)
    
    var text = document.getElementById("hello");
    text.innerHTML = gallons_used;
    
    //alert("The answer is " + gallons_used);
    
}

calculate()