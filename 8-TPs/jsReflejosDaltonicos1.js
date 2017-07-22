/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/

var colorSecreto;
var tiempoInicio = 0;

function comenzar(){

	window.alert('Los segundos empezarán a correr...');

	setInterval(function() { tiempoInicio += 1; }, 1000);

	colorSecreto = Math.floor(Math.random() * 6 + 1);

	switch(colorSecreto) {
		case 1:
			document.forms["FormIngreso"]["ColorElegido"].value = 'Azul';
			break;
		case 2:
			document.forms["FormIngreso"]["ColorElegido"].value = 'Amarillo';
			break;
		case 3:
			document.forms["FormIngreso"]["ColorElegido"].value = 'Marron';
			break;
		case 4:
			document.forms["FormIngreso"]["ColorElegido"].value = 'Verde';
			break;
		case 5:
			document.forms["FormIngreso"]["ColorElegido"].value = 'Celeste';
			break;
		case 6:
			document.forms["FormIngreso"]["ColorElegido"].value = 'Rojo';
			break;
	}
	
}

function Responder(colorParametro){
	
	if (colorParametro == document.forms["FormIngreso"]["ColorElegido"].value) {
		window.alert('Muy bien! Has tardado ' + tiempoInicio + ' segundos');
		window.alert('F5 Para reiniciar...')

	} else if (document.forms["FormIngreso"]["ColorElegido"].value == '') {
		window.alert('F5!');

	} else {
		window.alert('No, inténtalo de nuevo. Has tardado ' + tiempoInicio + ' segundos');
		window.alert('F5 Para reiniciar...')
	}

	document.forms["FormIngreso"]["ColorElegido"].value = '';

}
