var sidebar = document.getElementById('sidebar');
var show = false;

function disableOpacity() {
	sidebar.style.opacity = 0;
	sidebar.style.zIndex = -1;
}

function showSidebar() {
	sidebar.style.transition = 'transform 0.5s';
	sidebar.style.transform = 'translate(0vw)';
	sidebar.style.opacity = 1;
	sidebar.style.zIndex = 15;
	show = true;
}

function hideSidebar() {
	setTimeout(disableTransition, 500);
	setTimeout(disableOpacity, 500);
	sidebar.style.transform = 'translate(100vw)';
	show = false;
}

function disableTransition () {
	sidebar.style.transition = '';
}

function toggleSidebar() {
	if (show == false) {
		showSidebar();
	}

	else {
		hideSidebar();
	}
}

if ((window.innerWidth / window.innerHeight) > 1.25){
    document.getElementById('sidebar-sleep').style.display = 'none';

    document.getElementById('header-sleep').style.display = 'flex';
}

else if ((window.innerWidth / window.innerHeight) < 1.25){
    document.getElementById('sidebar-sleep').style.display = 'block';

    document.getElementById('header-sleep').style.display = 'none';
}

window.addEventListener('resize', function(){
    if ((window.innerWidth / window.innerHeight) > 1.25){
        document.getElementById('sidebar-sleep').style.display = 'none';

        document.getElementById('header-sleep').style.display = 'flex';
    }

    else if ((window.innerWidth / window.innerHeight) < 1.25){
        document.getElementById('sidebar-sleep').style.display = 'block';

        document.getElementById('header-sleep').style.display = 'none';
    }
});