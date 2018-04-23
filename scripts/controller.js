var distanceToRegisterTileSelection = 20;

$(document).ready(function () {
    boardStart();
});

function canvasClicked(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    clickOrPress(x, y);
}

function clickOrPress(x, y) {
    var a;
    var b;
    var distance
    for (i = 0; i < tiles.length; i++) {
        a = x - tiles[i].xCoord;
        b = y - tiles[i].yCoord;
        distance = Math.sqrt(a * a + b * b);

        if (distance < distanceToRegisterTileSelection) {

            tiles[i].inFocus = true;

        } else {
            tiles[i].inFocus = false;
        }
    }

    for (var k = 0; k < buttons.length; k++) {
        a = x - buttons[k].xMidPoint;
        b = y - buttons[k].yMidPoint;

        distance = Math.sqrt(a * a + b * b);

        if (distance < distanceToRegisterTileSelection * 4) {

            buttons[k].buttonText = "Clicked";
            console.log("clicked");
        }
    }
  
    drawCanvas();



}
