/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var aleatorio; 
var intentos = 0;
var ingresado;

function comenzar(){

	aleatorio = Math.floor(Math.random() * 100 + 1);
	
	window.alert('Se generó un número aleatorio del 1 al 100');

	document.getElementById('intentos').value = intentos;
}

function verificar(){
	
ingresado = parseInt(document.getElementById('numero').value);

	if (aleatorio > 0) {
	
		if (ingresado > 0) {

			intentos++;

			document.getElementById('intentos').value = intentos;

			if (ingresado == aleatorio) {
			window.alert('Has acertado en ' + intentos + ' intentos!');
			aleatorio = 0;
			intentos = 0;

			} else if (ingresado >= aleatorio) {
			window.alert('Más bajo...');

			} else if (ingresado <= aleatorio) {
			window.alert('Más alto...');
			}

		} else {

			window.alert('Ingresa un número válido...');
		}

	} else {

		window.alert('Antes debes generar un número aleatorio...');
	}
}