var sections = document.querySelectorAll(".submenu");
var sections_back = document.querySelectorAll(".link");

function toggleSection(n) {
	this.n = n;

	if (sections[this.n].style.display != 'block') {
		for (var i = 0; i < sections.length; i++) {
			if (i != this.n) {
				sections[i].style.display = 'none';
				sections_back[i].style.backgroundColor = "#FFE2D7";
			}

			else if (i == this.n) {
				sections[i].style.display = 'block';
				sections_back[i].style.backgroundColor = "#FFD8C9";
			}
		}
	}
}