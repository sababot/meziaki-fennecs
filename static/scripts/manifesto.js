if ((window.innerWidth / window.innerHeight) > 1.25){
        document.getElementById('manifesto').style.display = 'flex';
        document.getElementById('manifesto-text-mobile').style.display = 'none';
    }

    else if ((window.innerWidth / window.innerHeight) < 1){
        document.getElementById('manifesto').style.display = 'none';
        document.getElementById('manifesto-text-mobile').style.display = 'block';
    }

window.addEventListener('resize', function(){
    if ((window.innerWidth / window.innerHeight) > 1.25){
        document.getElementById('manifesto').style.display = 'flex';
        document.getElementById('manifesto-text-mobile').style.display = 'none';
    }

    else if ((window.innerWidth / window.innerHeight) < 1){
        document.getElementById('manifesto').style.display = 'none';
        document.getElementById('manifesto-text-mobile').style.display = 'block';
    }
});