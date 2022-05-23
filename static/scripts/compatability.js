var desert = document.getElementById("desert-svg");

var desert = document.getElementById("desert-svg");

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('container').style.display = 'none';
        document.getElementById('mobile-text').style.display = 'block';
    }

    if ((window.innerWidth / window.innerHeight) < 0.75) {
        desert.src = "../static/images/desertsvg_portrait.png";

        //document.getElementById('rock').style.display = 'none';

        //document.getElementById('morph-text').style.transform = 'rotate(90deg) translate(0vw, 143.5%)';
        //document.getElementById('morph-text').style.width = '90vh';
        //document.getElementById('morph-text').style.marginTop = '15vh';

        document.getElementById('container').style.display = 'none';
        document.getElementById('mobile-text').style.display = 'block';
    }

    else if ((window.innerWidth / window.innerHeight) > 1.25){
        desert.src = "../static/images/desertsvg_landscape_compressed.webp";

        //document.getElementById('rock').style.display = 'block';

        //document.getElementById('morph-text').style.transform = 'rotate(0deg) translate(-50%)';
        //document.getElementById('morph-text').style.width = '90vw';
        //document.getElementById('morph-text').style.marginTop = '0';

        document.getElementById('container').style.display = 'block';
        document.getElementById('mobile-text').style.display = 'none';
    }

    else if ((window.innerWidth / window.innerHeight) < 1.25){
        desert.src = "../static/images/desertsvg_portrait.png";

        //document.getElementById('rock').style.display = 'none';

        //document.getElementById('morph-text').style.transform = 'rotate(0deg) translate(-50%)';
        //document.getElementById('morph-text').style.width = '90vw';
        //document.getElementById('morph-text').style.marginTop = '7.5vh';

        document.getElementById('container').style.display = 'block';
        document.getElementById('mobile-text').style.display = 'none';
    }

window.addEventListener('resize', function(){
    var desert = document.getElementById("desert-svg");

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('container').style.display = 'none';
        document.getElementById('mobile-text').style.display = 'block';
    }

    if ((window.innerWidth / window.innerHeight) < 0.75) {
        desert.src = "../static/images/desertsvg_portrait.png";

        //document.getElementById('rock').style.display = 'none';

        //document.getElementById('morph-text').style.transform = 'rotate(90deg) translate(0vw, 143.5%)';
        //document.getElementById('morph-text').style.width = '90vh';
        //document.getElementById('morph-text').style.marginTop = '15vh';

        document.getElementById('container').style.display = 'none';
        document.getElementById('mobile-text').style.display = 'block';
    }

    else if ((window.innerWidth / window.innerHeight) > 1.25){
        desert.src = "../static/images/desertsvg_landscape_compressed.webp";

        document.getElementById('rock').style.display = 'block';

        //document.getElementById('morph-text').style.transform = 'rotate(0deg) translate(-50%)';
        //document.getElementById('morph-text').style.width = '90vw';
        //document.getElementById('morph-text').style.marginTop = '0';

        document.getElementById('container').style.display = 'block';
        document.getElementById('mobile-text').style.display = 'none';
    }

    else if ((window.innerWidth / window.innerHeight) < 1.25){
        desert.src = "../static/images/desertsvg_portrait.png";

        document.getElementById('rock').style.display = 'none';

        //document.getElementById('morph-text').style.transform = 'rotate(0deg) translate(-50%)';
        //document.getElementById('morph-text').style.width = '90vw';
        //document.getElementById('morph-text').style.marginTop = '7.5vh';

        document.getElementById('container').style.display = 'block';
        document.getElementById('mobile-text').style.display = 'none';
    }
});