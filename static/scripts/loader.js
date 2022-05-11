function func() {
	var myVar = setTimeout(showPage, 2500);
}

function showPage() {
	document.getElementById("loader").style.opacity = 0;
	document.getElementById("loader_div").style.opacity = 0;
	document.getElementById("loader_div").style.zIndex = 0;
}