var idleBlinkImages = ["images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/blink2.png", "images/blink3.png", "images/blink2.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png"];

var idleImages = ["images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png"];

var idleEyesLookLeftImages = ["images/idle1.png", "images/eyeslookleft1.png", "images/eyeslookleft2.png", "images/eyeslookleft3.png", "images/eyeslookleft3.png", "images/eyeslookleft3.png", "images/eyeslookleft3.png", "images/eyeslookleft2.png", "images/eyeslookleft1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png"];

var idleLeftHeadTurnImages = ["images/idle1.png","images/turnleft1.png","images/turnleft2.png","images/turnleft3.png","images/turnleft4.png","images/turnleft5.png","images/turnleft6.png","images/turnleft7.png","images/turnleft8.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png", "images/idle1.png"]


var currentImages = idleImages;
$(document).ready(function () {

});



function pickNewIdleAnimation() {
    var randomIndex = Math.floor(Math.random() * 12);
   
    if (randomIndex == 1 || randomIndex == 2 || randomIndex == 3) {
        currentImages = idleBlinkImages;
   
    }else if (randomIndex == 4) {

        currentImages = idleEyesLookLeftImages;
    } else if (randomIndex == 5) {

   
    } else if (randomIndex == 6) {

        currentImages = idleLeftHeadTurnImages;
    } else {
        currentImages = idleImages;
    }
}
