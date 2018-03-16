var State = {
    Idle: 1,
    Happy: 2,
};

var state = State.Happy;
var i = 0;
var currentImages;
var happiness = 100;


$(document).ready(function () {
    //currentImages = idleImages;
    Update();

})

function Update() {
    function actWithinState() {
        switch (state) {
            case State.Idle:
                console.log('state is idle');
                happiness = happiness - .5;
                break;
            case State.Happy:
                console.log('state is happy');
                happiness = happiness - .5;
                break;
        }
        i = (i + 1);
        if (i == 15) {
            updateState();
            pickAnimationVariation();
            switchImage();
            i = 0;
        } else {
          switchImage();
        }
    }
    setInterval(actWithinState, 100);
}

function updateState() {

    if (happiness >= 50) {
        state = State.Happy;       
    } else if (happiness < 50) {
        state = State.Idle;
    }
}

function pickAnimationVariation() {
    switch (state) {
        case State.Idle:
            pickNewIdleAnimation();
            break;
        case State.Happy:
            pickNewHappyAnimation();
            break;
    }
}

function switchImage()
{
    document.getElementById("animationImage").src = currentImages[i];
}
