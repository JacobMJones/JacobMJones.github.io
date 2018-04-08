var canvas;
var ctx;
var boardCoords = [];
var tiles = [];
var landTiles = [];
var waterTiles = [];
var landMasses = [];
var tileInFocus;
var mapX = 19;
var mapY = 19;
var owner;
var tileIndex = 0;
var amountOfSeeds = Math.floor(Math.random() * 8 + 2);
var gFactor = Math.floor(Math.random() * 6 + 6);
var player1Turn;


var xyPositionMultiple;
var xyPositionSpace;
var autoSetCircleSize;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext("2d");

    
  
  ctx.canvas.width  = window.innerWidth*.6;
  ctx.canvas.height = window.innerHeight;
    
xyPositionMultiple = window.innerWidth*.03;
xyPositionSpace = xyPositionMultiple/2;
autoSetCircleSize = xyPositionMultiple/2;
}

function generateBoardCoords() {

    var xPosition, yPosition;
    for (i = 0; i < mapX; i++) {
        for (d = 0; d < mapY; d++) {
            xPosition = i * xyPositionMultiple + 20;
            yPosition = d * xyPositionMultiple + 20;
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



        if (x == 20 || x == (mapX - 1) *xyPositionMultiple + 20 || y == 20 || y == (mapY - 1) * xyPositionMultiple + 20) {
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
            inFocus: false,
            mainFocus: false
        };

        tiles.push(tile);
        p = !p;
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

        drawTile(ctx, tiles[i].xPos, tiles[i].yPos, tiles[i].tileColor, 48, 15, tiles[i].tileID, tiles[i].land, tiles[i].inFocus, tiles[i].mainFocus);
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

function drawTile(ctx, x, y, color, circleSize, lineWidth, tID, isLand, clickedOn, focusedTile) {
    circleSize = autoSetCircleSize;
    if (isLand) {
        ctx.beginPath();
        ctx.arc(x, y, circleSize - 10, 0, Math.PI * 2, true);

        // ctx.stroke();
        ctx.shadowColor = "#8a8a8a";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 2.5;
        ctx.shadowOffsetY = 2.5;

    } else if (!isLand) {
        ctx.beginPath();
        ctx.arc(x, y, circleSize - 10, 0, Math.PI * 2, true);
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }

    if (clickedOn) {
        if (focusedTile) {
            ctx.arc(x, y, circleSize + 1, 0, Math.PI * 2, true);
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.lineWidth = lineWidth + 5;
            ctx.stroke();

        } else {
            ctx.arc(x, y, circleSize - 5, 0, Math.PI * 2, true);
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.lineWidth = lineWidth / 2;
            ctx.stroke();
        }
    }
    ctx.fillStyle = color;
    ctx.fill();

    ctx.closePath();


}

function addSoldiers() {
    for (i = 0; i < landTiles.length; i++) {
        if (landTiles[i].soldiers > 0) {

            if (landTiles[i].player1) {
                ctx.font = "50px bold Arial";
                ctx.fillStyle = "white";
                ctx.fillText("5", landTiles[i].xPos - 15, landTiles[i].yPos + 15);
            } else if (!landTiles[i].player1) {
                ctx.fillStyle = "black";
                ctx.font = "50px bold Arial";
                ctx.fillText("5", landTiles[i].xPos - 15, landTiles[i].yPos + 15);
            }

        }
    }
}

//make and return array
function putTilesInFocus(t) {
    if (tileInFocus == null) {
        tileInFocus = t;
        t.mainFocus = true;
    }

    if (t != tileInFocus) {
        tileInFocus.mainFocus = false;
        for (u = 0; u < tiles.length; u++) {
            tiles[u].inFocus = false;
        }
    }

    if (t.inFocus) {
        tiles[i].inFocus = false;
    } else {
        tiles[i].inFocus = true;
        tiles[i].mainFocus = true;
        tileInFocus = tiles[i];
    }


    for (i = 0; i < tiles.length; i++) {

        if (t.tileID == tiles[i].tileID - 1) {
            if (tiles[i].inFocus) {
                tiles[i].inFocus = false;
            } else {
                tiles[i].inFocus = true;
            }
        } else if (t.tileID == tiles[i].tileID + 1) {
            if (tiles[i].inFocus) {
                tiles[i].inFocus = false;
            } else {
                tiles[i].inFocus = true;
            }
        } else if (t.tileID == tiles[i].tileID + mapX) {
            if (tiles[i].inFocus) {
                tiles[i].inFocus = false;
            } else {
                tiles[i].inFocus = true;
            }
        } else if (t.tileID == tiles[i].tileID - mapX) {
            if (tiles[i].inFocus) {
                tiles[i].inFocus = false;
            } else {
                tiles[i].inFocus = true;
            }
        } else if (t.tileID == tiles[i].tileID - mapX + 1) {
            if (tiles[i].inFocus) {
                tiles[i].inFocus = false;
            } else {
                tiles[i].inFocus = true;
            }
        } else if (t.tileID == tiles[i].tileID - mapX - 1) {
            if (tiles[i].inFocus) {
                tiles[i].inFocus = false;
            } else {
                tiles[i].inFocus = true;
            }
        } else if (t.tileID == tiles[i].tileID + mapX + 1) {
            if (tiles[i].inFocus) {
                tiles[i].inFocus = false;
            } else {
                tiles[i].inFocus = true;
            }
        } else if (t.tileID == tiles[i].tileID + mapX - 1) {
            if (tiles[i].inFocus) {
                tiles[i].inFocus = false;
            } else {
                tiles[i].inFocus = true;
            }
        }
    }
}

function placeSoldiers() {

}

function attack() {

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

$("canvas").mousedown(function (e) {
    x = e.clientX;
    y = e.clientY;
    clickOrPress(x, y);
});
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
    //addSoldiers();
});

function clickOrPress(x, y) {

    var rect = canvas.getBoundingClientRect();
    var clickXOnCanvas = x - rect.left;
    var clickYOnCanvas = y - rect.top;
    var tileClicked;
    for (i = 0; i < tiles.length; i++) {
        tileX = tiles[i].xPos - rect.left;
        tileY = tiles[i].yPos - rect.top;

        var point = pointInCircle(tiles[i].xPos, tiles[i].yPos, clickXOnCanvas, clickYOnCanvas, 50);

        if (point) {
            putTilesInFocus(tiles[i]);
            drawBoard();
            // addSoldiers();
            return;
            /*
                        console.log(tiles[i]);
                        if (tiles[i].inFocus) {
                            tiles[i].inFocus = false;
                        } else {
                            tiles[i].inFocus = true;
                            
                        }
                    } else {
                        tiles[i].inFocus = false;
                    }
            */
        }

        //drawBoard();
        //addSoldiers();
    }
}
