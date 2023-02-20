function expand(id) {
	var section = document.getElementById('section-' + id);
	section.style.width = '50vw';
	section.style.height = '50vw';
	section.style.paddingTop = '0';

	for (var i = id + 1; i < 5; i++) {
		document.getElementById('section-' + i).style.paddingTop = '10vw';
	}
}