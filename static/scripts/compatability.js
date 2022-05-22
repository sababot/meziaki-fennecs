var desert = document.getElementById("desert-svg");

if ((window.innerWidth / window.innerHeight) < 0.75) {
        desert.src = "../static/images/desertsvg_portrait.png";

        document.getElementById('sidebar-sleep').style.display = 'block';

        document.getElementById('header-sleep').style.display = 'none';

        document.getElementById('rock').style.display = 'none';

        document.getElementById('morph-text').style.transform = 'rotate(90deg) translate(0vw, 143.5%)';
        document.getElementById('morph-text').style.width = '90vh';
        document.getElementById('morph-text').style.marginTop = '15vh';
    }

    else if ((window.innerWidth / window.innerHeight) > 1.25){
        desert.src = "../static/images/desertsvg_landscape_compressed.webp";

        document.getElementById('sidebar-sleep').style.display = 'none';

        document.getElementById('header-sleep').style.display = 'block';

        document.getElementById('rock').style.display = 'block';

        document.getElementById('morph-text').style.transform = 'rotate(0deg) translate(-50%)';
        document.getElementById('morph-text').style.width = '90vw';
        document.getElementById('morph-text').style.marginTop = '0';
    }

    else if ((window.innerWidth / window.innerHeight) < 1.25){
        desert.src = "../static/images/desertsvg_portrait.png";

        document.getElementById('sidebar-sleep').style.display = 'block';

        document.getElementById('header-sleep').style.display = 'none';

        document.getElementById('rock').style.display = 'none';

        document.getElementById('morph-text').style.transform = 'rotate(0deg) translate(-50%)';
        document.getElementById('morph-text').style.width = '90vw';
        document.getElementById('morph-text').style.marginTop = '7.5vh';
    }

window.addEventListener('resize', function(){
    var desert = document.getElementById("desert-svg");

    if ((window.innerWidth / window.innerHeight) < 0.75) {
        desert.src = "../static/images/desertsvg_portrait.png";

        document.getElementById('sidebar-sleep').style.display = 'block';

        document.getElementById('header-sleep').style.display = 'none';

        document.getElementById('rock').style.display = 'none';

        document.getElementById('morph-text').style.transform = 'rotate(90deg) translate(0vw, 143.5%)';
        document.getElementById('morph-text').style.width = '90vh';
        document.getElementById('morph-text').style.marginTop = '15vh';
    }

    else if ((window.innerWidth / window.innerHeight) > 1.25){
        desert.src = "../static/images/desertsvg_landscape_compressed.webp";

        document.getElementById('sidebar-sleep').style.display = 'none';

        document.getElementById('header-sleep').style.display = 'block';

        document.getElementById('rock').style.display = 'block';

        document.getElementById('morph-text').style.transform = 'rotate(0deg) translate(-50%)';
        document.getElementById('morph-text').style.width = '90vw';
        document.getElementById('morph-text').style.marginTop = '0';
    }

    else if ((window.innerWidth / window.innerHeight) < 1.25){
        desert.src = "../static/images/desertsvg_portrait.png";

        document.getElementById('sidebar-sleep').style.display = 'block';

        document.getElementById('header-sleep').style.display = 'none';

        document.getElementById('rock').style.display = 'none';

        document.getElementById('morph-text').style.transform = 'rotate(0deg) translate(-50%)';
        document.getElementById('morph-text').style.width = '90vw';
        document.getElementById('morph-text').style.marginTop = '7.5vh';
    }
});