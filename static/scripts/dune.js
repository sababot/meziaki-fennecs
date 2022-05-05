let prev = 2;
var show = false;

function showall() {
	show = true;

	for (var i = 1; i < 4; i++) {
		document.getElementById('fennec_' + i).style.transform = "translate(0%, -99%)";
	}
}

function hideall() {
	show = false;

	for (var i = 1; i < 4; i++) {
		document.getElementById('fennec_' + i).style.transform = "translate(0%, 0%)";
	}
}

function fennecs() {
	if (show == false) {
		let rand = Math.floor(Math.random() * 4) + 1;

		while (prev == rand) {
			rand = Math.floor(Math.random() * 4) + 1;
		}

		if (rand != 4) {
			for (var i = 1; i < 4; i++) {
				if (i != rand) {
					document.getElementById('fennec_' + i).style.transform = "translate(0%, 0%)";
				}

				else if (i == rand) {
					document.getElementById('fennec_' + i).style.transform = "translate(0%, -99%)";
				}
			}
		}

		else {
			for (var i = 1; i < 4; i++) {
				document.getElementById('fennec_' + i).style.transform = "translate(0%, 0%)";
			}
		}

		prev = rand;
	}
}

fennecs();

setInterval(fennecs, 3500);