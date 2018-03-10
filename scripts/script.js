$(document).ready(function () {
    console.log("in ready");

});


function canvasTest() {
    var canvasTest = document.getElementById("canvasTest");
    var ctx = canvasTest.getContext("2d");
    var imgForCanvas = new Image();

    //loop through Images 
    var i = 0;
    var pics = ["images/picture.png", "images/picture2.png", "images/picture3.png"];

    function toggle() {
        imgForCanvas.src = pics[i]; 
        imgForCanvas.onload = function () {
            ctx.drawImage(imgForCanvas, 0, 0, imgForCanvas.width, imgForCanvas.height,
                0, 0, canvasTest.width, canvasTest.height);
        }
        i = (i + 1) % pics.length; 


    }
    setInterval(toggle, 200);

}
