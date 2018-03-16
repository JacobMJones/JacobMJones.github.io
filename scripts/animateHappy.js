var happyBlinkImages = ["images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/blink2.png", "images/blink3.png", "images/blink2.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png"];

var happyImages = ["images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png"];



var currentImages = idleImages;
$(document).ready(function () {

});



function pickNewHappyAnimation() {
    
    var randomIndex = Math.floor(Math.random() * 2 + 1);
    if (randomIndex == 1) {
        currentImages = happyImages;

    } else if (randomIndex == 2) {

        currentImages = happyBlinkImages;
    }
}
