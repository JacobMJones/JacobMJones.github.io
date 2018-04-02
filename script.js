var canvas;

var ctx;

var boardCoords = [];
var tiles = [];
var landTiles = [];
var waterTiles = [];
var landMasses = [];
var tileInFocus;
startSeed = Math.floor(Math.random() * tiles.length);
var mapX = 20;
var mapY = 20;
var owner;
var tileIndex = 0;
var amountOfSeeds = Math.floor(Math.random() * 10 + 2);
var gFactor = Math.floor(Math.random() * 10 + 6);

function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext("2d");

 
canvas.addEventListener( 'touchstart', clickOrPress, false);


}
function onTouchStart(e) {
 ctx.fillRect(0,0,300,300);   
    
}
function generateBoardCoords() {
    var xPosition, yPosition;
    for (i = 0; i < mapX; i++) {
        for (d = 0; d < mapY; d++) {
            xPosition = i * 100 + 60;
            yPosition = d * 100 + 60;
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

    p = true;

    for (i = 0; i < boardCoords.length; i++) {
        x = boardCoords[i].xPos;
        y = boardCoords[i].yPos;
        var mapBorder = false;

        //water or land



        //makes a border maybe do this after the map is made

        if (x == 60 || x == (mapX - 1) * 100 + 60 || y == 60 || y == (mapY - 1) * 100 + 60) {
            mapBorder = true;
            soldiers = 0;
        } else {
            mapBorder = false;
        }

        tileIndex++;
        var tile = {
            xPos: x,
            yPos: y,
            height: "low",
            soldiers: 0,
            player1: p,
            tileID: tileIndex,
            growthFactor: 0,
            land: false,
            mapBorder: mapBorder,
            partOf: "nothing",
            tileColor: "#77cccc",
            alone: false,
            startSeed: false,
            inFocus: false
        };

        tiles.push(tile);
        p = !p;
    }
}

function removeSingleTiles() {
    for (i = 0; i < landTiles.length; i++) {
        for (p = 0; p < landTiles.length; p++) {


        }
    }
}

function setNations() {
    for (i = 0; i < tiles.length; i++) {
        let t = tiles[i];
        if (t.mapBorder) {
            t.land = false;
        }

        if (!t.land) {
            t.tileColor = "#c5e9e9";
        } else if (t.land) {
            switch (t.partOf) {
                case "0LandMass":
                    t.tileColor = "#cc99bb";
                    break;
                case "1LandMass":
                    t.tileColor = "#117777";
                    break;
                case "2LandMass":
                    t.tileColor = "#117744";
                    break;
                case "3LandMass":
                    t.tileColor = "#777711";
                    break;
                case "4LandMass":
                    t.tileColor = "#774411";
                    break;
                case "5LandMass":
                    t.tileColor = "#771122";
                    break;
                case "6LandMass":
                    t.tileColor = "#f441ee";
                    break;
                case "7LandMass":
                    t.tileColor = "#f9118a";
                    break;
                case "8LandMass":
                    t.tileColor = "#207a00";
                    break;
                case "9LandMass":
                    t.tileColor = "#8CC8bb";
                    break;
                case "10LandMass":
                    t.tileColor = "#9CC8bb";
                    break;


            }
        }
    }


}

function setUpLandMassArrays() {
    for (i = 0; i < amountOfSeeds; i++) {
        window["LandMassArray" + i] = new Array();

    }
}

function pickStartSeed() {

    for (o = 0; o < amountOfSeeds; o++) {

        startSeed = Math.floor(Math.random() * tiles.length);
        for (i = 0; i < tiles.length; i++) {
            if (tiles[i].tileID == startSeed) {
                tiles[i].land = true;
                tiles[i].startSeed = true;
                tiles[i].growthFactor = gFactor;
            }
        }
        growIsland(o);
    }
}

function growIsland(landIndex) {

    var partOf = o + "LandMass";
    var k = 0;
    var growing = true;
    var canGrow = true;

    while (canGrow) {

        var grow = false;
        for (i = 1; i < tiles.length; i++) {

            if (tiles[i].growthFactor > 0) {
                var seedingTileID = tiles[i].tileID;
                var newSeedingTile;
                tiles[i].growthFactor--;

                rndNum = Math.floor(Math.random() * 3);

                switch (rndNum) {

                    //grow right one   
                    case 0:
                        newSeedingTile = seedingTileID + mapY - 1;
                        break;
                        //grow left one
                    case 1:
                        newSeedingTile = seedingTileID - mapY - 1;
                        break;
                        //grow down one
                    case 2:
                        newSeedingTile = seedingTileID;
                        break;
                        //grow up one
                    case 3:
                        newSeedingTile = seedingTileID - 2;
                        break;
                }
                if (!tiles[i].mapBorder && tiles[newSeedingTile].land == false) {
                    tiles[i].land = true;
                    tiles[i].partOf = partOf;
                    tiles[newSeedingTile].growthFactor = tiles[i].growthFactor;
                }



                switch (o) {
                    case 0:
                        LandMassArray0.push(tiles[i]);
                        break;
                    case 1:
                        LandMassArray1.push(tiles[i]);
                        break;
                    case 2:
                        LandMassArray2.push(tiles[i]);
                        break;
                    case 3:
                        LandMassArray3.push(tiles[i]);
                        break;
                    case 4:
                        LandMassArray4.push(tiles[i]);
                        break;
                    case 5:
                        LandMassArray5.push(tiles[i]);
                        break;
                    case 6:
                        LandMassArray6.push(tiles[i]);
                        break;
                    case 7:
                        LandMassArray7.push(tiles[i]);
                        break;
                    case 8:
                        LandMassArray8.push(tiles[i]);
                        break;
                    case 9:
                        LandMassArray9.push(tiles[i]);
                        break;
                    case 10:
                        LandMassArray10.push(tiles[i]);
                        break;
                }


                grow = true;
            }

        }
        if (!grow) {
            canGrow = false;
        }
    }
}

function putWaterAndLandIntoLists() {

    for (i = 0; i < tiles.length; i++) {
        if (tiles[i].land == true) {
            landTiles.push(tiles[i]);
            tiles[i].soldiers = 1;
        } else {
            waterTiles.push(tiles[i]);
        }
    }
    console.log("amount of land tiles: " + landTiles.length + " amount of water tiles: " + waterTiles.length);
    for (q = 0; q < landTiles.length; q++) {

    }
}

function drawBoard() {
    clearCanvas(ctx, canvas);
    for (i = 0; i < tiles.length; i++) {

        drawTile(ctx, tiles[i].xPos, tiles[i].yPos, tiles[i].tileColor, 48, 15, tiles[i].tileID, tiles[i].land, tiles[i].inFocus);
    }


}

function drawSoldiers(ctx, x, y, color, circleSize, lineWidth) {
    ctx.beginPath();
    ctx.arc(x, y, circleSize, 0, Math.PI * 2, true);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawTile(ctx, x, y, color, circleSize, lineWidth, tID, isLand, clickedOn) {



    if (isLand) {
        ctx.beginPath();
        ctx.arc(x, y, circleSize-10, 0, Math.PI * 2, true);
        
        // ctx.stroke();
        ctx.shadowColor = "#8a8a8a";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;
        
    } else {
        ctx.beginPath();
        ctx.arc(x, y, circleSize - 10, 0, Math.PI * 2, true);
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }
    if (clickedOn) {
        ctx.arc(x, y, circleSize+5, 0, Math.PI * 2, true);
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function addSoldiersFirstTime() {
    for (i = 0; i < tiles.length; i++) {
        if (tiles[i].soldiers > 0 && !tiles[i].mapBorder) {


            drawSoldiers(ctx, tiles[i].xPos, tiles[i].yPos, '#ff1111', 5, 2);


        }

    }
}

function addSoldiersInGame() {
    for (i = 0; i < tiles.length; i++) {
        if (tiles[i].soldiers > 0 && !tiles[i].mapBorder) {


            drawSoldiers(ctx, tiles[i].xPos, tiles[i].yPos, '#ff1111', 5, 2);


        }

    }
}

function clearCanvas(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
}

function pointInCircle(x, y, cx, cy, radius) {
    var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distancesquared <= radius * radius;
}

$(document).ready(function () {
    init();
    generateBoardCoords();
    setupTiles();
    setUpLandMassArrays();
    pickStartSeed();
    putWaterAndLandIntoLists();
    removeSingleTiles();
    setNations();

    drawBoard();
    addSoldiersFirstTime();

});
$(document).click(function (e) {


    var rect = canvas.getBoundingClientRect();
    var clickXOnCanvas = e.clientX - rect.left;
    var clickYOnCanvas = e.clientY - rect.top;



    for (i = 0; i < tiles.length; i++) {
        tileX = tiles[i].xPos - rect.left;
        tileY = tiles[i].yPos - rect.top;

        var point = pointInCircle(tiles[i].xPos, tiles[i].yPos, clickXOnCanvas, clickYOnCanvas, 50);
        if (point) {
            console.log(tiles[i]);

            tiles[i].inFocus = true;
           
        }
        else{
            tiles[i].inFocus = false;
        }
    }
    drawBoard();
    addSoldiersInGame();
});

function clickOrPress(){
    console.log("clickorpress");
}

