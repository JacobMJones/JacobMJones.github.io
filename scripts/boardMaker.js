var boardCoords = [];
var tiles = [];
var buttons = [];
var landTiles = [];
var waterTiles = [];
var canvas;
var ctx;
var leftPadding = 200;
var upperPadding = 200;
var tileSize = 20;
var tileSizeInFocus = 23;
var amountOfSeeds = Math.floor(Math.random() * 8 + 2);
var focusedTile, previousFocusedTile;
//var amountOfSeeds = 4;
//var gFactor = 6;
var squareSize = 19;

var boardRect;
var playerOneRect;
var playerTwoRect;


var gFactor = Math.floor(Math.random() * 6 + 6);

var landColor = "#aaa323";
var waterColor = "#eee121"

function boardStart() {
    setCanvas();
    generateBoardCoords();
    setupTiles();
    setupInterface();
    setUpLandMassArrays();
    pickStartSeed();
    putWaterAndLandIntoLists();
    setNations();
    drawCanvas();
}

function setCanvas() {
    canvas = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext("2d");

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        canvas.setAttribute('width', '800');
        canvas.setAttribute('height', '600');
        tileSize = 5;
        tileSizeInFocus = 15;
    } else {
        canvas.setAttribute('width', '1350');
        canvas.setAttribute('height', '1000');
        tileSize = 21;
        tileSizeInFocus = 30;
    }
    setRectangles();


}

function setRectangles() {
    boardRect = {
        x: 220,
        y: 0,
        width: canvas.width - 550,
        height: canvas.height
    }
    playerOneRect =
    {
        x: 0,
        y: 70,
        width: 200,
        height:  canvas.height
    }
      playerTwoRect =
    {
        x: 1000,
        y: 70,
        width: 200,
        height:  canvas.height
    }
}

function generateBoardCoords() {

    var xPosition, yPosition;
    for (i = 0; i < squareSize; i++) {
        for (d = 0; d < squareSize; d++) {

            //this can be for positioning
            xPosition = i * 40 + 250;
            yPosition = d * 40 + 50;

            var coords = {
                xPos: xPosition,
                yPos: yPosition,

            }
            boardCoords.push(coords);
        }
    }
}

function setupTiles() {

    for (var i = 0; i < boardCoords.length; i++) {
        var x = boardCoords[i].xPos;
        var y = boardCoords[i].yPos;
        var mapBorder = false;
        if (x == 250 || x == 970 || y == 50 || y == 770) {
            mapBorder = true;

        } else {
            mapBorder = false;
        }
        var tile = {
            xCoord: boardCoords[i].xPos,
            yCoord: boardCoords[i].yPos,
            inFocus: false,
            mainColor: "",
            land: false,
            startSeed: false,
            growthFactor: 0,
            partOf: "",
            mapBorder: mapBorder,
            tileId: i
        }
        tiles.push(tile);
    }
}

function setupButtons() {

    for (var i = 0; i < 8; i++) {
        var bText;
        var player1Button;
        var xCo;
        switch (i) {
            case 0:
                bText = "Place";
                player1Button = true;
                xCo = 50;
                yCo = 150;

                break;
            case 1:
                bText = "Move";
                player1Button = true;
                xCo = 50;
                yCo = 300;
                break;
            case 2:
                bText = "Attack";
                player1Button = true;
                xCo = 50;
                yCo = 450;
                break;
            case 3:
                bText = "Fortify";
                player1Button = true;
                xCo = 50;
                yCo = 600;
                break;
            case 4:
                bText = "Place";
                player1Button = false;
                xCo = 1050;
                yCo = 150;
                break;
            case 5:
                bText = "Move";
                player1Button = false;
                yCo = 300;
                xCo = 1050;
                break;
            case 6:
                bText = "Attack";
                player1Button = false;
                xCo = 1050;
                yCo = 450;
                break;
            case 7:
                bText = "Fortify";
                player1Button = false;
                xCo = 1050;
                yCo = 600;
                break;
        }


        //midpoints fro clicking and
        //text formatting
        var xMid = xCo + 50;
        var yMid = (yCo + 50);
        var inFocus;
        if (i == 0 || i == 4) {
            inFocus = true;
        } else {
            inFocus = false;
        }
        var button = {
            color: "#2eae2e",
            xCoord: xCo,
            yCoord: yCo,
            xMidPoint: xMid,
            yMidPoint: yMid,
            xLength: 150,
            yLength: 100,
            buttonText: bText,
            player1Button: player1Button,
            inFocus: inFocus
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
    ctx.clearRect(playerOneRect.x, playerOneRect.y, playerOneRect.width, canvas.height);
    ctx.clearRect(playerTwoRect.x, playerTwoRect.y, playerTwoRect.width, playerTwoRect.height);
    for (var i = 0; i < buttons.length; i++) {
        ctx.beginPath();
        ctx.strokeRect(buttons[i].xCoord, buttons[i].yCoord, buttons[i].xLength, buttons[i].yLength);
        ctx.stroke();

        if (!buttons[i].inFocus) {
            drawText(buttons[i].buttonText, "22px Arial", '#000000', buttons[i].xMidPoint, buttons[i].yMidPoint);
        } else {
            drawText(buttons[i].buttonText, "32px Arial", '#000000', buttons[i].xMidPoint, buttons[i].yMidPoint);
        }
        ctx.closePath();
    }
}

function drawTitles() {
    if (gameState.player1Turn = true) {
        drawText("Player 1", "40px Verdana", '#000000', 50, 50);
        drawText("Player 2", "30px Verdana", '#000000', 1050, 50);
    } else {
        drawText("Player 1", "30px Verdana", '#000000', 50, 50);
        drawText("Player 2", "40px Verdana", '#000000', 1050, 50);
    }


}

function drawTile() {
    ctx.clearRect(boardRect.x, boardRect.y, boardRect.width, boardRect.height);
    for (i = 0; i < tiles.length; i++) {
        tile = tiles[i];
        ctx.beginPath();
        if (!tile.inFocus) {

            ctx.arc(tile.xCoord, tile.yCoord, 20, 0, Math.PI * 2, true);
        } else if (tile.inFocus) {

            if (tile == focusedTile) {
                ctx.arc(tile.xCoord, tile.yCoord, 20, 0, Math.PI * 2, true);

            } else {
                focusedTile = tile;
            }

        }

        ctx.fillStyle = tile.mainColor;
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 2.5;
        ctx.shadowOffsetY = 2.5;
        ctx.fill();
        ctx.closePath();
    }
    focusTiles();

}

function drawFocusedTile(tile) {
    ctx.beginPath();
    ctx.arc(tile.xCoord, tile.yCoord, tileSizeInFocus, 0, Math.PI * 2, true);
    ctx.fillStyle = tile.mainColor;
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 2.5;
    ctx.shadowOffsetY = 2.5;
    ctx.fill();
    ctx.closePath();
}

function focusTiles() {
    if (focusedTile != undefined) {


        if (focusedTile != previousFocusedTile) {
            drawFocusedTile(focusedTile);
            previousFocusedTile = focusedTile;
        } else {
            ctx.beginPath();
            ctx.arc(previousFocusedTile.xCoord, previousFocusedTile.yCoord, 20, 0, Math.PI * 2, true);
            ctx.fillStyle = previousFocusedTile.mainColor;
            ctx.shadowColor = "transparent";
            ctx.shadowBlur = 5;
            ctx.shadowOffsetX = 2.5;
            ctx.shadowOffsetY = 2.5;
            ctx.fill();
            ctx.closePath();
            previousFocusedTile = undefined;
        }
    }

}

function drawCanvas(buttons) {

    drawButtons();
    drawTitles();
    drawTile();

}

function setUpLandMassArrays() {
    for (i = 0; i < amountOfSeeds; i++) {
        window["LandMassArray" + i] = new Array();
    }
}

function pickStartSeed() {

    for (o = 0; o < amountOfSeeds; o++) {

        startSeed = Math.floor(Math.random() * tiles.length);


        if (tiles[startSeed].partOf == "") {
            tiles[startSeed].partOf = o + "LandMass";
            tiles[startSeed].growthFactor = gFactor;


            var partOf;

            switch (o) {
                case 0:
                    partOf = "0LandMass";
                    LandMassArray0.push(tiles[i]);
                    break;
                case 1:
                    partOf = "1LandMass";
                    LandMassArray1.push(tiles[i]);
                    break;
                case 2:
                    partOf = "2LandMass";
                    LandMassArray2.push(tiles[i]);
                    break;
                case 3:
                    partOf = "3LandMass";
                    LandMassArray3.push(tiles[i]);
                    break;
                case 4:
                    partOf = "4LandMass";
                    LandMassArray4.push(tiles[i]);
                    break;
                case 5:
                    partOf = "5LandMass";
                    LandMassArray5.push(tiles[i]);
                    break;
                case 6:
                    partOf = "6LandMass";
                    LandMassArray6.push(tiles[i]);
                    break;
                case 7:
                    partOf = "7LandMass";
                    LandMassArray7.push(tiles[i]);
                    break;
                case 8:
                    partOf = "8LandMass";
                    LandMassArray8.push(tiles[i]);
                    break;
                case 9:
                    partOf = "9LandMass";
                    LandMassArray9.push(tiles[i]);
                    break;
                case 10:
                    partOf = "10LandMass";
                    LandMassArray10.push(tiles[i]);
                    break;
            }

            growIsland(tiles[startSeed], partOf);
        }

    }
}

function growIsland(startTile, o) {

    for (var i = 0; i < 20; i++) {
        rndNum = Math.floor(Math.random() * 4);

        switch (rndNum) {

            case 0:
                newTileSeedIndex = startTile.tileId + 1;
                break;
            case 1:
                newTileSeedIndex = startTile.tileId + 19;
                break;
            case 2:
                newTileSeedIndex =
                    startTile.tileId - 19;
                break;
            case 3:
                newTileSeedIndex = startTile.tileId - 1;
                break;

        }
        if (newTileSeedIndex < tiles.length - 1 && newTileSeedIndex > 0) {
            if (tiles[newTileSeedIndex].partOf == "" && tiles[newTileSeedIndex].mapBorder == false) {
                tiles[newTileSeedIndex].partOf = o;
                startTile = tiles[newTileSeedIndex];
            }
        } else {

        }
    }

}

function putWaterAndLandIntoLists() {

    for (i = 0; i < tiles.length; i++) {
        if (tiles[i].land == true) {
            landTiles.push(tiles[i]);

        } else {
            waterTiles.push(tiles[i]);
        }
    }
    console.log("amount of land tiles: " + landTiles.length + " amount of water tiles: " + waterTiles.length);

}

function setNations() {
    for (i = 0; i < tiles.length; i++) {
        let t = tiles[i];
        if (t.mapBorder || t.partOf == "") {
            t.land = false;
            t.partOf = "water";
            t.mainColor = "#c5e3e9";
        } else {

            switch (t.partOf) {
                case "0LandMass":
                    t.mainColor = "#cc99bb";
                    break;
                case "1LandMass":
                    t.mainColor = "#117777";
                    break;
                case "2LandMass":
                    t.mainColor = "#117744";
                    break;
                case "3LandMass":
                    t.mainColor = "#aa7711";
                    break;
                case "4LandMass":
                    t.mainColor = "#77a411";
                    break;
                case "5LandMass":
                    t.mainColor = "#771122";
                    break;
                case "6LandMass":
                    t.mainColor = "#f12111";
                    break;
                case "7LandMass":
                    t.mainColor = "#f9118a";
                    break;
                case "8LandMass":
                    t.mainColor = "#207a00";
                    break;
                case "9LandMass":
                    t.mainColor = "#8CC8bb";
                    break;
                case "10LandMass":
                    t.mainColor = "#9CC8bb";
                    break;


            }
        }
    }


}
