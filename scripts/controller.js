var distanceToRegisterSelection = 20; 

$(document).ready(function () {
    boardStart();
});



function canvasClicked(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    clickOrPress(x, y);
}

function pointInCircle(x, y, cx, cy, radius) {

    var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
   
    return distancesquared <= radius * radius;
}

function clickOrPress(x, y) {



  
    for (i = 0; i < tiles.length; i++) {
        var a = x - tiles[i].xCoord;
        var b = y - tiles[i].yCoord;
        var distance = Math.sqrt(a * a + b * b);
       
        if (distance < distanceToRegisterSelection){
            console.log(distance);
            tiles[i].inFocus = true;
           
        }
        else {
            tiles[i].inFocus = false;
        }
    }
 drawBoard();
   
      

}
