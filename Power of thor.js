var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var thorX = initialTX;
var thorY = initialTY;
// game loop
while (true) {
    var remainingTurns = parseInt(readline());
    var directionX = "";
    var directionY = "";

    if(thorX > lightX){
        directionX = "W";
        thorX --;
    }else if(thorX < lightX) {
        directionX = "E";
        thorX ++;
    }else{
        directionX = "";
    }
