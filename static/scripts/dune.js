var expanded = false;

function expand() {
	if (expanded == false) {
		document.getElementById('dune').style.marginTop = '10vw';
		document.getElementById('dune').style.height = '80vh';

		document.getElementById('expand_button').style.transform = 'rotate(90deg)';

		expanded = true;
	}

	else if (expanded == true) {
		document.getElementById('dune').style.marginTop = '65vh';
		document.getElementById('dune').style.height = '16.5vh';

		document.getElementById('expand_button').style.transform = 'rotate(-90deg)';

		expanded = false;
	}
}