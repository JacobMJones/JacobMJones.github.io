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
var sadness, loneliness, tiredness;


$(document).ready(function () {

    sadness = 50;
    loneliness = 50;
    tiredness = 50;
    Update();
});

//update is called once, the function inside act timed updates
function Update() {


    function stateToggle() {
        changeState();
    }
    setInterval(stateToggle, 2000);

    function variableToggle() {
        console.log(sadness);
        updateDevInformation();
        switch (state) {
            case State.Idling:
                currentImages = idleImages;
                sadness = sadness - .5;
                loneliness = loneliness - .5;
                tiredness = tiredness - .5;
                break;
            case State.Sleeping:
                currentImages = sleepingImages;
                sadness = sadness + .5;
                tiredness = tiredness - 1;
                break;
            case State.Happy:
                currentImages = happyImages;
                tiredness = tiredness + 1;
                break;

        }
    }
    setInterval(variableToggle, 200);
}


function updateDevInformation() {
    document.getElementById("tirednessInfo").innerHTML = "Tiredness: " + tiredness;
    document.getElementById("sadnessInfo").innerHTML = "Sadness: " + sadness;
    document.getElementById("lonelinessInfo").innerHTML = "Loneliness: " + loneliness;
}

function changeState() {
    console.log("change state called");
}
