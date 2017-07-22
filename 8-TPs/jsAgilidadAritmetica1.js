/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

var resp; //respuesta
var result; //resultado
var op;	//operación

var num1;
var num2;

function comenzar(){

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
	
}

function respuesta() {

	resp = parseInt(document.getElementById('Respuesta').value);

	result = Math.floor(result);

	if (resp == result) {
		window.alert('Es correcto!');
	} else {
		window.alert('Incorrecto. La respuesta era: ' + result);
	}

	comenzar();

}
