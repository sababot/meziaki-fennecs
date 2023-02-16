if ((window.innerWidth / window.innerHeight) > 1.25){
        document.getElementById('manifesto').style.display = 'flex';
        document.getElementById('manifesto-mobile').style.display = 'none';

        document.getElementById('team-sections').style.display = 'grid';
        document.getElementById('team-sections-mobile').style.display = 'none';

        document.getElementById('explore').style.display = 'grid';
        document.getElementById('explore-mobile').style.display = 'none';

        document.getElementById('manifesto-text').style.display = 'block';
        document.getElementById('manifesto-text-mobile').style.display = 'none';
    }

    else if ((window.innerWidth / window.innerHeight) < 1){
        document.getElementById('manifesto').style.display = 'none';
        document.getElementById('manifesto-mobile').style.display = 'block';

        document.getElementById('team-sections').style.display = 'none';
        document.getElementById('team-sections-mobile').style.display = 'grid';

        document.getElementById('explore').style.display = 'none';
        document.getElementById('explore-mobile').style.display = 'grid';

        document.getElementById('manifesto-text').style.display = 'none';
        document.getElementById('manifesto-text-mobile').style.display = 'block';
    }

window.addEventListener('resize', function(){
    if ((window.innerWidth / window.innerHeight) > 1.25){
        document.getElementById('manifesto').style.display = 'flex';
        document.getElementById('manifesto-mobile').style.display = 'none';

        document.getElementById('team-sections').style.display = 'grid';
        document.getElementById('team-sections-mobile').style.display = 'none';

        document.getElementById('explore').style.display = 'grid';
        document.getElementById('explore-mobile').style.display = 'none';

        document.getElementById('manifesto-text').style.display = 'block';
        document.getElementById('manifesto-text-mobile').style.display = 'none';
    }

    else if ((window.innerWidth / window.innerHeight) < 1){
        document.getElementById('manifesto').style.display = 'none';
        document.getElementById('manifesto-mobile').style.display = 'block';

        document.getElementById('team-sections').style.display = 'none';
        document.getElementById('team-sections-mobile').style.display = 'grid';

        document.getElementById('explore').style.display = 'none';
        document.getElementById('explore-mobile').style.display = 'grid';

        document.getElementById('manifesto-text').style.display = 'none';
        document.getElementById('manifesto-text-mobile').style.display = 'block';
    }
});