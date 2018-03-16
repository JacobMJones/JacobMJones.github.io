var State = {
   Idle: 1,
   Happy: 2,
};
var state = State.Idle;

$(document).ready(function () {
   currentImages = idleImages;
    animate();
    
})

function Update()
{
     function actOnState() {

switch(state){
    case State.Idle:
        break;
    case State.Happy:
        break;
}
    }
    setInterval(actOnState, 100);
    
}

function animate() {
    var i = 0;
    function toggleImages() {
        document.getElementById("animationImage").src = currentImages[i];
        i = (i + 1);


        if (i == 15) {
            
            //The pickNew functions randomly switch between
            //possible of their given state
            switch(state){
                case State.Idle:
                    pickNewIdleAnimation();
                    break;
                case State.Happy:
                    pickNewHappyAnimation();
                    break;
            }
            i = 0;
        }

    }
    setInterval(toggleImages, 100);
}