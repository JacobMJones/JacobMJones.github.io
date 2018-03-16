var State = {
    Idle: 1,
    Happy: 2,
};
var state = State.Happy;
var i = 0;
var currentImages;
var happiness = 100;
$(document).ready(function () {
    currentImages = idleImages;
    Update();

})

function Update() {
    function actOnState() {

        switch (state) {
            case State.Idle:
                 console.log('state is idle');
                happiness = happiness -.5;
                break;
            case State.Happy:
                console.log('state is happy');
                happiness = happiness -.5;
                break;
        }
        
        console.log('happiness' + happiness);
        i = (i + 1);
        if (i == 15) {
            
          
             checkState();
             document.getElementById("animationImage").src = currentImages[i];
             i = 0;
        } else {
            
             document.getElementById("animationImage").src = currentImages[i];
        }
        
       
    }
    setInterval(actOnState, 100);

}

//checkState switches states and selects variations
//of appropriate animation
function checkState() {

    if(happiness>=50)
        {
            state = State.Happy;
            pickNewHappyAnimation();
        }
    else if (happiness<50)
        {
            state = State.Idle;
            pickNewIdleAnimation();
        }
}


