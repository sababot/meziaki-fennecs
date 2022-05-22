// Init
var desert = document.getElementById("desert-svg");

if ((window.innerWidth / window.innerHeight) > 1.25){
    desert.src = "../static/images/desertsvg_landscape_compressed.webp";
    document.getElementById('sidebar-sleep').style.display = 'none';
    document.getElementById('header-sleep').style.display = 'block';
}

else if ((window.innerWidth / window.innerHeight) < 1.25){
    desert.src = "../static/images/desertsvg_portrait.png";
    document.getElementById('sidebar-sleep').style.display = 'block';
    document.getElementById('header-sleep').style.display = 'none';
}

window.addEventListener('resize', function(){
    var desert = document.getElementById("desert-svg");

    if ((window.innerWidth / window.innerHeight) > 1.25){
        desert.src = "../static/images/desertsvg_landscape_compressed.webp";
        document.getElementById('sidebar-sleep').style.display = 'none';
        document.getElementById('header-sleep').style.display = 'block';
    }

    else if ((window.innerWidth / window.innerHeight) < 1.25){
        desert.src = "../static/images/desertsvg_portrait.png";
        document.getElementById('sidebar-sleep').style.display = 'block';
        document.getElementById('header-sleep').style.display = 'none';
    }
});