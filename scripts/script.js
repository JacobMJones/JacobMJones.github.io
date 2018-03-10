$(document).ready(function () {

    console.log("im in jQuery do ready");
});


function animatePet() {
    console.log(" in animatePet");

   
    var img = document.createElement('img');
    img.id = "imgForAnimation"
    document.getElementById('petImageDiv').appendChild(img)

    //loop through Images 
    var i = 0;
    var pics = ["images/picture.png", "images/picture2.png", "images/picture3.png"];
    var el = document.getElementById('imgForAnimation');

    function toggle() {
        el.src = pics[i]; // set the image
        i = (i + 1) % pics.length; // update the counter
    }
    setInterval(toggle, 200);
}
