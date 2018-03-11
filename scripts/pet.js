var State = {
    Sleeping: 1,
    Idling: 2,
    Happy: 3,
    Sad: 4,
    Hungry: 5,
    Tired: 6,
    Lonely: 7,
    Angry: 8
};

var state = State.Idling;
var happiness, loneliness, wakefulness;


$(document).ready(function () {

    happiness = 50;
    loneliness = 50;
    wakefulness = 50;
    Update();
});

//update is called once, the function inside act timed updates
function Update() {
    function stateToggle() {
        changeState();
    }
    setInterval(stateToggle, 2000);

    function variableToggle() {
        
        console.log(happiness);
        updateDevInformation();
        switch (state) {
                
            case State.Idling:
                currentImages = idleImages;
                happiness = happiness - .5;
                loneliness = loneliness - .5;
                wakefulness = wakefulness - .5;
                break;
                
            case State.Sleeping:
                currentImages = sleepingImages;
                happiness = happiness + .5;
                wakefulness = wakefulness - 1;
                loneliness = loneliness  + 1;
                break;
                
            case State.Happy:
                currentImages = happyImages;
               loneliness = loneliness  + 1;
                wakefulness = wakefulness -.5;
                happiness = happiness - .5;
                break;
                
            case State.Sad:
                currentImages = sadImages;
                loneliness = loneliness  + 1;
                wakefulness = wakefulness - .5;
                happiness = happiness - .5;
                break;
        }
    }
    setInterval(variableToggle, 200);
}


function updateDevInformation() {
    document.getElementById("wakefulnessInfo").innerHTML = "Wakefulness: " + wakefulness;
    document.getElementById("happinessInfo").innerHTML = "Happiness: " + happiness;
    document.getElementById("lonelinessInfo").innerHTML = "Loneliness: " + loneliness;
    document.getElementById("stateInfo").innerHTML = "State: " + state.toString();
}

function changeState() {
    if (happiness > 0) {
        state = State.Happy;
    }
    else if (happiness<0)
        {
            state = State.Sad;
        }
}
