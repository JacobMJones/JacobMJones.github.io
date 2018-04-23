var boardCoords = [];
var tiles = [];
var canvas;
var ctx;
var leftPadding = 200;
var upperPadding = 200;
var tileSize = 15;
var tileSizeInFocus = 25;
function boardStart() {
    setCanvas();
    generateBoardCoords();
    tileSetup();
    drawBoard();
}

function setCanvas() {
    canvas = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext("2d");
    
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
   
    if(isMobile){
        
        
        canvas.setAttribute('width', '500');
canvas.setAttribute('height', '500');
        var tileSize = 10;
var tileSizeInFocus = 25;
    } 
    
    else {
         canvas.setAttribute('width', '1000');
canvas.setAttribute('height', '1000');
        var tileSize = 6.6;
var tileSizeInFocus = 16.6;
    }
}


function generateBoardCoords() {
    var squareSize = 19;
    var xPosition, yPosition;
    for (i = 0; i < squareSize; i++) {
        for (d = 0; d < squareSize; d++) {

            //this can be for positioning
            xPosition = i * 40 + 100;
            yPosition = d * 40 + 100;

            var coords = {
                xPos: xPosition,
                yPos: yPosition,
                tileId: i + d
            }
            boardCoords.push(coords);
        }
    }

}

function tileSetup() {

    for (var i = 0; i < boardCoords.length; i++) {

        var tile = {
            xCoord: boardCoords[i].xPos,
            yCoord: boardCoords[i].yPos,
            inFocus: false,
            mainColor: "#77c000",
            startSeed: false
        }
        tiles.push(tile);
    }
}

function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < tiles.length; i++) {
        drawTile(tiles[i]);
    }
}

function drawTile(tile) {
    
    ctx.beginPath();
    
    
    if(tile.inFocus){
        ctx.fillStyle = '#8a8a8a';
        ctx.arc(tile.xCoord, tile.yCoord, tileSizeInFocus, 0, Math.PI * 2, true);
    }
    else{
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
