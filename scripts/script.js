$(document).ready(function () {
    console.log("in ready");

});


function animatePet() {

    //create img
    var img = document.createElement('img');
    img.id = "imgForAnimation"
    document.getElementById('petImageDiv').appendChild(img)

    //loop through Images 
    var i = 0;
    var pics = ["images/picture.png", "images/picture2.png", "images/picture3.png"];
    var el = document.getElementById('imgForAnimation');


    function toggle() {
        el.src = pics[i]; // set the image
        i = (i + 1) % pics.length; // update the counter


    }
    setInterval(toggle, 200);
}

function canvasTest() {

    console.log("in canvas test");

    var ctx = document.getElementById('canvasTest');

    if (ctx.getContext) {
        ctx = ctx.getContext('2d');
        var imgForCanvas = new Image();

        imgForCanvas.width = "50px";
        imgForCanvas.height = "50px";
        imgForCanvas.onload = function () {
            ctx.drawImage(imgForCanvas, 100, 100);
         console.log(" in loaded function");

        }
        imgForCanvas.src = "images/picture.png"

    }


}
