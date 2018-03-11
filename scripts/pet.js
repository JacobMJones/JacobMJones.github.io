var State = {
    Sleeping: 1,
    Idling: 2,
    Happy: 3,
    Sad: 4,
    Hungry: 5,
    Tired: 6,
    Lonely: 7
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
        console.log(happiness);

        switch (state) {
            case State.Idling:
                sadness = sadness - .5;
                loneliness = loneliness - .5;
                tiredness = tiredness - .5;
                break;
            case State.Sleeping:
                sadness = sadness + .5;
                tiredness = tiredness - 1;
                break;
            case State.Happy:            
                tiredness = tiredness + 1;
                break;

        }
    }
    setInterval(variableToggle, 200);
}



function changeState() {
    console.log("change state called");
}
