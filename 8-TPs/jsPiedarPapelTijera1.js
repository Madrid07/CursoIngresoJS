/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var npc;
var player;

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
		window.alert('Empate!');
	} else if (player == 1 && npc == 2) {
		window.alert('Gana la máquina!');
	} else if (player == 1 && npc == 3) {
		window.alert('Ganas tú!');
	} else if (player == 2 && npc == 3) {
		window.alert('Gana la máquina!');
	} else if (player == 2 && npc == 1) {
		window.alert('Ganas tú!');
	} else if (player == 3 && npc == 1) {
		window.alert('Gana la máquina!');
	} else if (player == 3 && npc == 2) {
		window.alert('Ganas tú!');
	}

	comenzar();
}