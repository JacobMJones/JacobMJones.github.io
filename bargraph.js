var barArray = [];
var sections = [];
var colors = [];

var divContainer;
var divContainerHeight;
var divContainerWidth;
var barGraphDivHeight;
var barGraphDivWidth;
var barGraphLeftMargin;
var graphLabelDivHeight;
var graphLabelDivWidth;
var graphValuesDivHeight;
var graphValuesDivWidth;
var barGraphDiv;
var graphLabelDiv;
var graphValuesDiv;
var highestValue;

function drawBarChart(data, options, element) {
	createDivs(element);
	graph(data, options);
	labels(data, options);
	lines(options);
	innerValues(data, options, element);
	outerValues(data, options, element);
}

function createDivs(element) {

	divContainer = $(element);
	divContainerHeight = $(element).height();
	divContainerWidth = $(element).width();

	barGraphDivHeight = divContainerHeight * 0.9;
	barGraphDivWidth = divContainerWidth * 0.9;
	barGraphLeftMargin = divContainerWidth * 0.1;

	graphLabelDivHeight = barGraphDivHeight * 0.1;
	graphLabelDivWidth = divContainerWidth * 0.9;

	graphValuesDivHeight = divContainerHeight * 0.1;
	graphValuesDivWidth = divContainerWidth;

	barGraphDiv = $("<div id='bar-graph' style=" + "margin-left:" + barGraphLeftMargin + ";" + "position:" + "absolute" + ";" + "height:" + barGraphDivHeight + ";" + "width:" + barGraphDivWidth + ";" + ">" + "</div>").appendTo(divContainer);

	graphLabelDiv = $("<div id='graph-label' style=" + "margin-left:" + barGraphLeftMargin + ";" + "height:" + graphLabelDivHeight + ";" + "width:" + graphLabelDivWidth + ";" + ">" + "</div>").appendTo(divContainer);

	graphValuesDiv = $("<div id='graph-values' style=" + "text-align:" + "right" + ";" + "height:" + graphValuesDivHeight + ";" + "width:" + graphValuesDivWidth + ";" + ">" + "</div>").appendTo(divContainer);
}

function graph(data, options) {

	var graphHtml = "";
	var barGraphWidth = $(barGraphDiv).width();
	var lineWidth = barGraphWidth + barGraphWidth / 10;
	var barGraphHeight = $(barGraphDiv).height();

	//Finds highest value and creates proportions according to graph size
	var valuesArray = [];
	for (u = 0; u < data.length; u++) {
		valuesArray.push(data[u].value);
	}
	highestValue = Math.max(...valuesArray);
	var barHeightModifier = (barGraphDivHeight * 0.9) / highestValue;

	//prepares section object which will be used in html string
	var amountOfColors = data.length;
	setColors(options, amountOfColors);
	for (var i = 0; i < data.length; i++) {

		section = {
			divName: "barDiv" + i,
			variableName: data[i].name,
			variableValue: data[i].value,
			sectionHeight: data[i].value + (barGraphHeight / 2),
			color: colors[i],
			barHeight: data[i].value * barHeightModifier,
			sectionWidth: (90 / data.length) - (5 / data.length) + "%",
			distance: (100 / data.length) * i + "%",
			distanceInt: ((100 / data.length) * i)
		}
		sections.push(section);
	}

	//creates html string
	for (var s = 0; s < sections.length; s++) {

		// section and bar
		graphHtml += "<div class='bar' style=" + "height:" + sections[s].barHeight + ";" + "background-color:" + sections[s].color + ";" + "bottom:" + ((divContainerHeight * .02)) + ";" + "float:" + "left" + ";" + "display:" + "inline-block" + ";" +  "position:" + "absolute" + ";" + "width:" + sections[s].sectionWidth + ";" + "margin-left:" + sections[s].distance + ";" + "text-align:" + "center" + ";" + "></div>";
	}

	$(barGraphDiv).append(graphHtml);
}

function labels(data, options, element) {

	var labelsHtml = "";
	var labelDist = graphLabelDivWidth / sections.length;

	for (var s = 0; s < sections.length; s++) {

		labelsHtml += "<div class='barName' style=" + "text-align:" + "center" + ";" + "display:" + "inline-block" + ";" +   "position:" + "absolute" + ";" + "bottom:" + graphLabelDivHeight + ";" + "margin-left:" + ((labelDist * s) + (labelDist / data.length)) + ";" + ">" + sections[s].variableName + "</div>";
	}

	$(graphLabelDiv).append(labelsHtml);
}

function lines(options) {

	var lineHtml = "";
	var midValLine = barGraphDivHeight / 2;

	//bottom line
	lineHtml += "<hr class='valueLine' style=" + "position:" + "absolute" + ";" + "background:" + "grey" + ";" + "bottom:" + 0 + ";" + "size:" + "1px" + ";" + "height:" + "1" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";

	//middle line
	if ((options.showMidLine === undefined || options.showMidLine == true)) {
		lineHtml += "<hr class='valueLine' style=" + "background:" + "grey" + ";" + "position:" + "absolute" + ";" + "bottom:" + midValLine + ";" + "size:" + "1px" + ";" + "height:" + "1" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";
	}

	//top line
	lineHtml += "<hr class='valueLine' style=" + "background:" + "grey" + ";" + "top:" + 0 + ";" + "size:" + "1px" + ";" + "position:" + "absolute" + ";" +  "height:" + "1" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";

	$(barGraphDiv).append(lineHtml);
}

function innerValues(data, options, element) {

	if (options.insideValues !== undefined && options.insideValues == true) {
		var valuesHtml = "";
		var labelDist = graphLabelDivWidth / sections.length;
		for (var s = 0; s < sections.length; s++) {
			valuesHtml += "<div class='barValue' style=" +  "position:" + "absolute" + ";" + "display:" + "inline-block" + ";" + "text-align:" + "center" + ";" + "bottom:" + (sections[s].barHeight + 10) + ";" + "margin-left:" + ((labelDist * s) + (labelDist / data.length)) + ";" + ">" + sections[s].variableValue + "</div>";
		}
		$(barGraphDiv).append(valuesHtml);
	}
}

function outerValues(data, options, element) {

	//Values 
	var toptopValue = Math.ceil((highestValue * 1.1) / 10) * 10;
	if (options.showMidLine !== undefined && options.showMidLine  == true) {
	var midValue = toptopValue / 2
	}else{
		midValue = '';
	}
	var midValPosition = divContainerHeight / 2;

	var valuesHtml = "";

	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "top:" + 0 + ";" + ">" + toptopValue + "</p>";

	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "bottom:" + midValPosition + ";" + ">" + midValue + "</p>";

	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "bottom:" + (divContainerHeight * .05) + ";" + ">" + 0 + "</p>";

	$(graphValuesDiv).append(valuesHtml);
}

function count(string) {
	var count = {};
	string.split('').forEach(function (s) {
		count[s] ? count[s]++ : count[s] = 1;
	});
	return count;
}

function setColors(options, amountOfColors) {

	if (options.colors !== undefined) {

		var opt = options.colors;
		var amount = opt.match(/#/gi).length;

		for (var i = 0; i < amount; i++) {
			var col = opt.substr(0, opt.indexOf(','));
			opt = opt.replace(col, '');
			opt = opt.replace(',', '');
			colors.push(col);
		}

	} else {


		for (var u = 0; u < amountOfColors; u++) {
			var col = randomColor();
			colors.push(col);
		}
	}
	console.log(colors);
}

function randomColor() {

	var c = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	return c;
}
