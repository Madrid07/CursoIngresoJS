/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
			
			switch (intentos) {
				case 1:
					window.alert('Usted es un psíquico!');
					break;
				case 2:
					window.alert('Excelente percepción!');
					break;
				case 3:
					window.alert('Esto es suerte!');
					break;
				case 4:
					window.alert('Excelente técnica!');
					break;
				case 5:
					window.alert('Usted está en la media...');
					break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					window.alert('Falta técnica...');
					break;
				default:
					window.alert('Afortunado en el amor (?)');
			}

			aleatorio = 0; intentos = 0;

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