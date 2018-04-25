var mapSize = 20;
var originX = 100;
var originY = 100;
var hexagonGrid;
var seeds =5;
var seedArray = [];
$(document).ready(function () {
	init();

	console.log('pickSeeds');

});

function init() {

	hexagonGrid = new HexagonGrid("HexCanvas", 25);

	//the tile object is created here
	hexagonGrid.setHexGrid(mapSize, mapSize, originX, originY, false);

	pickSeeds();
	growLand();
	drawMap();

}

function drawMap() {
	for (var i = 0; i < tiles.length; i++) {
		hexagonGrid.drawHex(tiles[i].x, tiles[i].y, tiles[i].color, false);
	}
}

function pickSeeds() {

	var seedsChosen = false;
	while (!seedsChosen) {
		var rndNum = Math.floor(Math.random() * tiles.length);

		if (tiles[rndNum].onEdge == false) {
			tiles[rndNum].seed = true;
			tiles[rndNum].partOf = seeds + "land";

			seedArray.push(tiles[rndNum]);
			seeds--;
		}
		if (seeds == 0) {
			seedsChosen = true;
		}
	}
}

function findNeighbours(tile) {
    var neighbours = [];
    var n = [];  
    
	if(tile.column % 2 !== 0){
        
       n = [  
	tile.tileId - mapSize - 1 ,     
	tile.tileId - 2,      
	tile.tileId + mapSize - 1,         
	tile.tileId + mapSize,        
    tile.tileId,        
    tile.tileId - mapSize
           ]
        
    }
	else{
        n = [  
	tile.tileId - mapSize  - 1 ,
    tile.tileId - mapSize  - 2,
    tile.tileId + mapSize - 1,
    tile.tileId + mapSize - 2,
    tile.tileId - 2, 
            tile.tileId
           ]
        
    }

	

   

	for (var i = 0; i < n.length; i++) {

		if (n[i] > 0 && n[i] < mapSize * mapSize) {
			neighbours.push(tiles[n[i]]);

		}
	}




	return neighbours;
	//  neighbours.push();
	//return neighbours;
	//return neighbours;
	/*
	
	//console.log('X ' + x + " Y " + y);
	var neighboursIds = [];
	var neighbours = [];
	
	
var n = [
	tile.tileId - mapSize,
	tile.tileId - 1,
	tile.tileId + mapSize,
	tile.tileId + mapSize + 1,
	tile.tileId + 1,
	tile.tileId - mapSize + 1];
	
	
	for (var i = 0; i < n.length; i++) {
		
		if(n[i] > 0 && n[i] < mapSize*mapSize){
			neighbours.push(tiles[n[i]]);
			
		}
	}

	return neighbours;
	*/
}

function growLand() {
    
	for (var i = 0; i < seedArray.length; i++) {	
		c = i + 5;
     var col = colorArray[c];
		seedArray[i].color = col;
         var neigh = seedArray[i].neighbours;  
		

		for (var u = 0; u < neigh.length; u++) {
           
        
			neigh[u].color = col;
			neigh[u].partOf = 'country' + u;
		}
	}
}