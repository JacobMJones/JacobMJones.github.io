var idleBlinkImages = ["images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/blink2.png", "images/blink3.png", "images/blink2.png", "images/idle1.png"];

var idleImages = ["images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png"];

var headTurnRightImages = ["images/idle1.png", "images/headturnright1.png", "images/headturnright2.png", "images/headturnright3.png", "images/headturnright3.png","images/headturnright2.png", "images/headturnright1.png", "images/idle1.png"];



var eyesLookLeftImages = ["images/idle1.png", "images/eyeslookleft1.png", "images/eyeslookleft2.png", "images/eyeslookleft3.png", "images/eyeslookleft3.png","images/eyeslookleft2.png", "images/eyeslookleft1.png", "images/idle1.png"];

var animationIndex = 0;
var currentImages = idleImages;
$(document).ready(function () {
    animate();
});

function animate() {

    var i = 0;

    function toggleImages() {
        document.getElementById("animationImage").src = currentImages[i];
        i = (i + 1);


        if (i == 7) {
            pickNewAnimation();
            i = 0;
        }

    }
    setInterval(toggleImages, 100);
}

function pickNewAnimation() {
    var randomIndex = Math.floor(Math.random() * 12);
    console.log(randomIndex);
    if (randomIndex == 1 || randomIndex == 2) {
        currentImages = idleBlinkImages;
    } else if (randomIndex == 3) {

        currentImages = headTurnRightImages;
        
    }else if (randomIndex == 4) {

        currentImages = eyesLookLeftImages;
    } else {
        currentImages = idleImages;
    }
}
