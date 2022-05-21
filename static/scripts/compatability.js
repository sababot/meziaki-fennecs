// Init
var desert = document.getElementById("desert-svg");

if ((window.innerWidth / window.innerHeight) > 1.25){
    desert.src = "../static/images/desertsvg_landscape_compressed.webp";
}

else if ((window.innerWidth / window.innerHeight) < 1.25){
    desert.src = "../static/images/desertsvg_portrait.png";
}

window.addEventListener('resize', function(){
    var desert = document.getElementById("desert-svg");

    if ((window.innerWidth / window.innerHeight) > 1.25){
        desert.src = "../static/images/desertsvg_landscape_compressed.webp";
    }

    else if ((window.innerWidth / window.innerHeight) < 1.25){
        desert.src = "../static/images/desertsvg_portrait.png";
    }
});