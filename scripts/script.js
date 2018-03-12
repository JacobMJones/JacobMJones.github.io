$(document).ready(function () {
    Animate();
});

var imgForCanvas = new Image();

var happyImages = ["images/happy1.png", "images/happy2.png", "images/happy3.png", "images/happy4.png", "images/happy5.png", "images/happy6.png"];

var idleImages = ["images/idle1.png", "images/idle2.png", "images/idle3.png", "images/idle4.png", "images/idle5.png", "images/idle6.png"];

//"images/idle7.png", "images/idle8.png",  "images/idle9.png"];

var angryImages = ["images/angry1.png"];

var sleepingImages = ["images/sleeping1.png"];

var sadImages = ["images/sad1.png"];

var hungryImages = ["images/hungry1.png"];


var currentImages = idleImages;



function Animate() {

    /*
    var canvasForAnimation = document.getElementById("canvasForAnimation");
    var ctx = canvasForAnimation.getContext("2d");
    var i = 0;

    function toggle() {
        imgForCanvas.src = currentImages[i];
        imgForCanvas.onload = function () {
            
          ctx.drawImage(imgForCanvas, 0, 0, 60,80);
          
         
        }
        i = (i + 1) % currentImages.length;
    }
    setInterval(toggle, 200);
    */
    var i = 0;

    function toggle() {
        console.log("toggle called");
        document.getElementById("animationImage").src = currentImages[i];
        i = (i + 1) % currentImages.length;
    }
    setInterval(toggle, 300);

}
