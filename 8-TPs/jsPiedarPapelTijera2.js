
var npc;
var player;

var empatadas = 0;
var ganadas = 0;
var perdidas = 0;

function comenzar() {
	npc = Math.floor(Math.random() * 3 + 1);
}

function piedra() {
	player = 1;
	resultado();
}

function papel() {
	player = 2;
	resultado();
}

function tijera() {
	player = 3;
	resultado();
}

function resultado() {

	if(player == npc) {
		empatadas++;
		window.alert('Empate!');
		document.getElementById('empatadas').value = 'Empatadas: ' + empatadas;
		comenzar();

	} else if (player == 1 && npc == 2) {
		perdidas++;
		window.alert('Gana la máquina!');
		document.getElementById('perdidas').value = 'Perdidas: ' + perdidas;
		comenzar();

	} else if (player == 1 && npc == 3) {
		ganadas++;
		window.alert('Ganas tú!');
		document.getElementById('ganadas').value = 'Ganadas: ' + ganadas;
		comenzar();

	} else if (player == 2 && npc == 3) {
		perdidas++;
		window.alert('Gana la máquina!');
		document.getElementById('perdidas').value = 'Perdidas: ' + perdidas;
		comenzar();

	} else if (player == 2 && npc == 1) {
		ganadas++;
		window.alert('Ganas tú!');
		document.getElementById('ganadas').value = 'Ganadas: ' + ganadas;
		comenzar();

	} else if (player == 3 && npc == 1) {
		perdidas++;
		window.alert('Gana la máquina!');
		document.getElementById('perdidas').value = 'Perdidas: ' + perdidas;
		comenzar();

	} else if (player == 3 && npc == 2) {
		ganadas++;
		window.alert('Ganas tú!');
		document.getElementById('ganadas').value = 'Ganadas: ' + ganadas;
		comenzar();
	}
}
