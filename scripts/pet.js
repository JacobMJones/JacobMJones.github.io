$(document).ready(function () {

    LiveToggle();
});

//this is how im implementing a Update() type of function
function LiveToggle() {
    console.log("im in livetoggle");
    function toggle() {
       if(currentImages==idleImages)
           {currentImages = happyImages}
        else if (currentImages == happyImages)
            {currentImages = idleImages}
    }
    setInterval(toggle, 2000);
}



