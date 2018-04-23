var boardCoords = [];
var tiles = [];
var buttons = [];
var canvas;
var ctx;
var leftPadding = 200;
var upperPadding = 200;
var tileSize = 15;
var tileSizeInFocus = 25;

function boardStart() {
    setCanvas();
    generateBoardCoords();
    setupTiles();
    setupInterface();
    drawCanvas();
}

function setCanvas() {
    canvas = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext("2d");

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        canvas.setAttribute('width', '500');
        canvas.setAttribute('height', '500');
        tileSize = 5;
        tileSizeInFocus = 15;
    } else {
        canvas.setAttribute('width', '1200');
        canvas.setAttribute('height', '1000');
        tileSize = 15;
        tileSizeInFocus = 25;
    }
}

function generateBoardCoords() {
    var squareSize = 19;
    var xPosition, yPosition;
    for (i = 0; i < squareSize; i++) {
        for (d = 0; d < squareSize; d++) {

            //this can be for positioning
            xPosition = i * 40 + 250;
            yPosition = d * 40 + 50;

            var coords = {
                xPos: xPosition,
                yPos: yPosition,
                tileId: i + d
            }
            boardCoords.push(coords);
        }
    }
}

function setupTiles() {
    for (var i = 0; i < boardCoords.length; i++) {

        var tile = {
            xCoord: boardCoords[i].xPos,
            yCoord: boardCoords[i].yPos,
            inFocus: false,
            mainColor: "#77c000",
            isLand: false,
            startSeed: false
        }
        tiles.push(tile);
    }
}

function setupButtons() {

    for (var i = 0; i < 4; i++) {
        
        //this is to change the y coord
        var yCo = (i * 100) + 150;
        if (i == 0) {
            yCo = 150;
        } else {
            yCo = (i * 150) + 150;
        }
        
        //midpoints fro clicking and
        //text formatting
        var xMid = (50 + 150) / 2;
        var yMid = (yCo + 50);
        
        var bt;
            switch(i){
                case 0:
                   bt = "Place";
                    break;
                case 1:
                   bt = "Move";
                    break;
                case 2:
                    bt =  "Attack";
                    break;
                    case 3:
                    bt =  "Fortify";
                    break;
            }
       
        
        var button = {
            color: "#2eae2e",
            xCoord: 50,
            yCoord: yCo,
            xMidPoint: xMid,
            yMidPoint: yMid,
            xLength: 150,
            yLength: 100,
            buttonText: bt
        }
        buttons.push(button);
    }

}

function setupInterface() {


    setupButtons();

}

function drawText(txt, font, col, x, y) {
    ctx.fillStyle = col;
    ctx.font = font;
    ctx.shadowColor = "transparent";
    ctx.fillText(txt, x, y);
}

function drawButtons() {

    for (var i = 0; i < buttons.length; i++) {
        ctx.strokeRect(buttons[i].xCoord, buttons[i].yCoord, buttons[i].xLength, buttons[i].yLength);
        ctx.stroke();

        drawText(buttons[i].buttonText, "22px Arial", '#000000', buttons[i].xMidPoint, buttons[i].yMidPoint);
    }
}

function drawTitles() {
    drawText("Player 1", "30px Verdana", '#000000', 50, 50);
    drawText("Player 2", "30px Verdana", '#000000', 1050, 50);
}

function drawCanvas() {


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < tiles.length; i++) {
        drawTile(tiles[i]);
    }

    drawButtons();
    drawTitles();
}

function drawTile(tile) {

    ctx.beginPath();
    if (tile.inFocus) {
        ctx.fillStyle = '#8a8a8a';
        ctx.arc(tile.xCoord, tile.yCoord, tileSizeInFocus, 0, Math.PI * 2, true);
    } else {
        ctx.fillStyle = tile.mainColor;
        ctx.arc(tile.xCoord, tile.yCoord, tileSize, 0, Math.PI * 2, true);
    }


    ctx.shadowColor = "#8a8a8a";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 2.5;
    ctx.shadowOffsetY = 2.5;

    ctx.fill();

    ctx.closePath();
}
