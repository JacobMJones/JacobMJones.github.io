var distanceToRegisterTileSelection = 20;

var gameState = {
    
    player1Turn: true,
    stateOfPlayer1: "Place",
    stateOfPlayer2: "Place"
}


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
            if (tiles[i].inFocus) {
                tiles[i].inFocus = false;
            } else {
                tiles[i].inFocus = true;
            }
        } else {
            tiles[i].inFocus = false;
        }
    }

    for (var k = 0; k < buttons.length; k++) {
        a = x - buttons[k].xMidPoint;
        b = y - buttons[k].yMidPoint;

        distance = Math.sqrt(a * a + b * b);

        if (distance < distanceToRegisterTileSelection * 4) {

       
            for(var m = 0; m<buttons.length; m++)
                {
                    buttons[m].inFocus = false;
                }
            switch(buttons[k].buttonText){
                case "Place":
                    gameState.stateOfPlayer = "Place";
                    buttons[k].inFocus = true;
                    break;
                case "Move":
                    gameState.stateOfPlayer = "Move";
                    buttons[k].inFocus = true;
                    break;
                case "Attack":
                    gameState.stateOfPlayer = "Attack";
                    buttons[k].inFocus = true;
                    break;
                case "Fortify":
                     gameState.stateOfPlayer = "Fortify";
                    buttons[k].inFocus = true;
                    break;
                    
            }
            console.log(gameState.stateOfPlayer);

        }
    }
    drawCanvas();
}
