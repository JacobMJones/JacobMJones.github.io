function tileClicked(tile) {
	console.log(tile);


	drawTile(tile, waterSelectedColor);
   

}

function drawTile(tile, color) {

	var drawy = tile.column % 2 == 0 ? (tile.row * hexagonGrid.height) + hexagonGrid.canvasOriginY + 6 : (tile.row * hexagonGrid.height) + hexagonGrid.canvasOriginY + 6 + (hexagonGrid.height / 2);
	var drawx = (tile.column * hexagonGrid.side) + hexagonGrid.canvasOriginX;

	hexagonGrid.drawHex(drawx, drawy - 6, color, "");
}

function colorSetter() {

}
