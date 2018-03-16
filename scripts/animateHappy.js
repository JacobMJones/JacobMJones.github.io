var happyBlinkImages = ["images/happy1.png", "images/happy2.png", "images/happy3.png", "images/happy4.png", "images/happy3.png", "images/happy2.png", "images/happy1.png", "images/happy5.png", "images/happy6.png", "images/happy7.png", "images/happy6.png", "images/happy5.png", "images/happy1.png", "images/happy1.png", "images/happy1.png", "images/happy1.png"];

var happyImages = ["images/happy1.png", "images/happy1.png",  "images/happy1.png",  "images/happy1.png",  "images/happy1.png",  "images/happy1.png",  "images/happy1.png",  "images/happy1.png",  "images/happy1.png",  "images/happy1.png", "images/happy1.png",  "images/happy1.png", "images/happy1.png",  "images/happy1.png",  "images/happy1.png",  "images/happy1.png"];




$(document).ready(function () {

});



function pickNewHappyAnimation() {
    
    var randomIndex = Math.floor(Math.random() * 2 + 1);
    if (randomIndex == 1) {
        console.log('happyImages');
        currentImages = happyImages;

    } else if (randomIndex == 2) {

        currentImages = happyBlinkImages;
        console.log('happyBlinkImages');
    }
}
