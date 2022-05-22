var sidebar = document.getElementById('sidebar');
var show = false;

function showSidebar() {
	sidebar.style.transform = 'translate(0vw)';
	show = true;
}

function hideSidebar() {
	sidebar.style.transform = 'translate(100vw)';
	show = false;
}

function toggleSidebar() {
	if (show == false) {
		showSidebar();
	}

	else {
		hideSidebar();
	}
}