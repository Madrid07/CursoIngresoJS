/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

var fin = false;

var temp; //temporizador

var resp; //respuesta
var result; //resultado
var op;	//operación

var num1;
var num2;

function comenzar(){

	window.alert('Sólo tendrás 5 segundos para responder!');
	
	op = Math.floor(Math.random() * 4 + 1);
	num1 = Math.floor(Math.random() * 10 + 1);
	num2 = Math.floor(Math.random() * 10 + 1);

	switch (op) {
		case 1:
			document.getElementById('PrimerNumero').value = num1;
			document.getElementById('Operador').value = '+';
			document.getElementById('SegundoNumero').value = num2;
			result = num1 + num2; 
			break;

		case 2:
			document.getElementById('PrimerNumero').value = num1;
			document.getElementById('Operador').value = '-';
			document.getElementById('SegundoNumero').value = num2;
			result = num1 - num2;
			break;

		case 3:
			document.getElementById('PrimerNumero').value = num1;
			document.getElementById('Operador').value = '*';
			document.getElementById('SegundoNumero').value = num2;
			result = num1 * num2;
			break;

		case 4:
			document.getElementById('PrimerNumero').value = num1;
			document.getElementById('Operador').value = '/';
			document.getElementById('SegundoNumero').value = num2;
			result = num1 / num2;
			break;
	}

	temp = window.setTimeout(finJuego, 5000);

}

function responder() {

	if (fin == false) {

		resp = parseInt(document.getElementById('Respuesta').value);
		result = Math.floor(result);

		if (resp == result) {
			window.alert('Es correcto!');

		} else {
			window.alert('Incorrecto. La respuesta era: ' + result);
		}

		fin = true;
		window.alert('Para volver a jugar presiona F5');

	} else {
		window.alert('Dije que presionaras F5!');
	}

	window.clearTimeout(temp); 
}

function finJuego() {

	window.alert('Se acabó tu tiempo!');

	responder();
}