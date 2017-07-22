/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {
	var metros = (parseInt(document.getElementById('Largo').value) +
		parseInt(document.getElementById('Ancho').value)) * 2 * 3;

	window.alert('Se deben comprar ' + metros + ' metro(s) de alambre');
}

function Circulo () {
	var metros = parseInt(document.getElementById('Radio').value) * 3;

	window.alert('Se deben comprar ' + metros + ' metro(s) de alambre');	
}

function Materiales () {
	var cemento = (parseInt(document.getElementById('Largo').value) *
		parseInt(document.getElementById('Ancho').value)) * 2;
	
	var cal = (parseInt(document.getElementById('Largo').value) *
		parseInt(document.getElementById('Ancho').value)) * 3;

	window.alert('Se necesitan ' + cemento + ' bolsa(s) de cemento y ' + cal + ' bolsa(s) de cal');	
}