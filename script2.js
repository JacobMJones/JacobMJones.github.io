


BigCircle = function(ctx,x, y, color, circleSize) {
    ctx.beginPath();
    ctx.arc(x, y, circleSize, 0, Math.PI * 2, true);
    ctx.fillStyle=color
    ctx.fill();
    ctx.closePath();
    this.clicked=function(){
      ctx.fillStyle='#ff0000'
      ctx.fill();
    }

var clicked = false;
var totalClicks = 0;

    this.clicked = function () {
        totalClicks++;
        console.log("im clickkkking!" + clicked + " total " + totalClicks);
        if (!clicked) {
            ctx.fillStyle = '#ffb12a';
            ctx.fill();
            clicked = true;
        } else {
            ctx.fillStyle = '#aab12a';
            ctx.fill();
            clicked = false;
        }
    }
}

function init() {

    canvas = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext('2d');
    makeTiles();
}

function drawTiles() {
    for (i = 0; i < mapX; i++) {

        for (a = 0; a < mapY; a++) {

            xPosition = i * 100 + 60;
            yPosition = a * 100 + 60;
            tileIdNum = i + a;
            var tile = {
                xPos: xPosition,
                yPos: yPosition,
                tileId: tileIdNum,
                onOff: "on"
            };
            tiles.push(tile);
        }
    }
}

function drawBoard() {
    canvas.clear();
    for (i = 0; i < tiles.length; i++) {
        if (tiles[i].onOff == "on") {
            makeTile(ctx, tiles[i].xPos, tiles[i].yPos, '#ffb12a', 50, '#aab12a');

        } else {
            makeTile(ctx, tiles[i].xPos, tiles[i].yPos, '#eeeeee', 50, '#eeeeee');
        }

    }
}
$(document).click(function (e) {
    if (!boardMade) {
        drawBoard();
        boardMade = true;
        return;
    }

    var closestDist;
    var closestTile;
    for (i = 0; i < tiles.length; i++) {
        var point = pointInCircle(tiles[i].xPos, tiles[i].yPos + 50, e.pageX, e.pageY, 50);
        if (point) {
            //ctx.globalCompositeOperation = 'xor';
            //makeTile(ctx, tiles[i].xPos, tiles[i].yPos, 'eeeeee', 50, '#eeeeee');
            tiles[i].onOff = "off";
        }
    }

});

function pointInCircle(x, y, cx, cy, radius) {
    var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distancesquared <= radius * radius;
}

$(document).ready(function () {
    init();


});
