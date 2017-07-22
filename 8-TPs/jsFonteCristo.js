/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.

d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

function NumerosPoI(poi){ //PARES o IMPARES

	var num = parseInt(document.getElementById('numero').value);

	var matriz = [];

	if(!(num >= 1)){

		window.alert('Ingrese un número válido...');

	} else {

		for(var i = poi ; i <= num ; i+=2){
			matriz[i] = i;
			console.log(matriz[i]);
		}

		window.alert('El resultado se imprimió en consola: [F12]');
	}
}

function NumerosDivisibles() {

	var num = parseInt(document.getElementById('numero').value);

	var enteros = 0;

	var matriz = [];
 	
 	for(var i = 0 ; i <= 100 && i < num ; i+=1){ 	// Puede optimizarse!!
 		matriz[i] = num/i;
 	}

 	for(var i = 0 ; i <= matriz.length ; i++){

 		if(Number.isInteger(matriz[i])){
 			console.log(num + ' / ' + i + ' = ' + matriz[i]);
 			enteros++;
 		}
 	}

 	console.log('El número ' + num + ' puede dividirse por ' + enteros + ' número(s) distintos!');

	console.log('Esto limitando el divisor hasta el número 100.');		// Se puede mejorar para números inferiores a 100

 	window.alert('El resultado se imprimió en consola: [F12]');

}

function VerificarPrimo(){

	var num = parseInt(document.getElementById('numero').value);

	var matriz = [];

	var entero;
 	
 	for(var i = 0 ; i < num ; i+=1){
 		
 		entero = num/i;

 		if(Number.isInteger(entero))
 			matriz[i] = i;
 	}

 	if(matriz.length == 2){

 		window.alert('Es un número primo!');

 	} else {

 		window.alert('No es un número primo...');
 	}
} 



function NumerosPrimos(){		// 	El que más costó!!

	var num = parseInt(document.getElementById('numero').value);

	var test = 0;

	var dos = 0;

	var x = 2;

 	
 	for(var i = 1 ; i <= num ; i++) {

 		for(var j = 0 ; j < 1 ; j++) {

 			test = x / i;

 			if(Number.isInteger(test)) {

 				dos += 1;

 			}

 			if(dos == 2 && i == x) {

 				console.log(x);

 				i = 0;
 				x += 1;
 				dos = 0;
 			
 			} else if(dos > 2) {

 				i = 0;
 				x += 1;
 				dos = 0;
 			}
 		}
 	}
 	
 	window.alert('El resultado se imprimió en consola: [F12]');
 }

