var desert = document.getElementById("desert-svg");

    if ((window.innerWidth / window.innerHeight) < 0.75) {
        desert.src = "../static/images/desertsvg_portrait.png";
        document.getElementById('sidebar-sleep').style.display = 'block';
        document.getElementById('header-sleep').style.display = 'none';
        document.getElementById('dune').style.height = '40vh';
    }

    else if ((window.innerWidth / window.innerHeight) > 1.25){
        desert.src = "../static/images/desertsvg_landscape_compressed.webp";
        document.getElementById('sidebar-sleep').style.display = 'none';
        document.getElementById('header-sleep').style.display = 'block';
        document.getElementById('dune').style.height = '10vh';
    }

    else if ((window.innerWidth / window.innerHeight) < 1.25){
        desert.src = "../static/images/desertsvg_portrait.png";
        document.getElementById('sidebar-sleep').style.display = 'block';
        document.getElementById('header-sleep').style.display = 'none';
        document.getElementById('dune').style.height = '10vh';
    }

window.addEventListener('resize', function(){
    var desert = document.getElementById("desert-svg");

    if ((window.innerWidth / window.innerHeight) < 0.75) {
        desert.src = "../static/images/desertsvg_portrait.png";
        document.getElementById('sidebar-sleep').style.display = 'block';
        document.getElementById('header-sleep').style.display = 'none';
        document.getElementById('dune').style.height = '40vh';
    }

    else if ((window.innerWidth / window.innerHeight) > 1.25){
        desert.src = "../static/images/desertsvg_landscape_compressed.webp";
        document.getElementById('sidebar-sleep').style.display = 'none';
        document.getElementById('header-sleep').style.display = 'block';
        document.getElementById('dune').style.height = '10vh';
    }

    else if ((window.innerWidth / window.innerHeight) < 1.25){
        desert.src = "../static/images/desertsvg_portrait.png";
        document.getElementById('sidebar-sleep').style.display = 'block';
        document.getElementById('header-sleep').style.display = 'none';
        document.getElementById('dune').style.height = '10vh';
    }
});