$(document).ready(function () {
    Animate();
});
var animationIndex = 0;
var imgForCanvas = new Image();

var happyImages = ["images/happy1.png", "images/happy2.png", "images/happy3.png", "images/happy4.png", "images/happy5.png", "images/happy6.png"];

var idleImages = ["images/idle1.png","images/idle1.png","images/idle1.png","images/idle1.png","images/idle1.png","images/idle1.png","images/idle1.png","images/idle1.png"];

var idleBlinkImages = ["images/idle1.png","images/idle1.png","images/idle1.png","images/idle1.png","images/blink2.png","images/blink3.png","images/blink2.png","images/idle1.png"];

var angryImages = ["images/angry1.png"];

var sleepingImages = ["images/sleeping1.png"];

var sadImages = ["images/sad1.png"];

var hungryImages = ["images/hungry1.png"];


var currentImages = idleBlinkImages;

function   pickIdleAnimation() {
   

    var rndNum = Math.floor((Math.random() * 2));
    
    
 //   if (rndNum == 1) {
        currentImages = idleBlinkImages;
   // } else {
      //  currentImages = idleImages;
  // }
   
}


function Animate() {
console.log("ani" + animationIndex + currentImages);
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
    

   
        document.getElementById("animationImage").src = currentImages[animationIndex];
    
        animationIndex = (animationIndex + 1);

        if(animationIndex==8)
            {

                animationIndex = 0;
                
                pickIdleAnimation();
            }
  
    setInterval(Animate, 10000);

}
