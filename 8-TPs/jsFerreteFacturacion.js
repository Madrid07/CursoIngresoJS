/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () {
	var resultado = (parseInt(document.getElementById('PrecioUno').value) + 
		parseInt(document.getElementById('PrecioDos').value) +
		parseInt(document.getElementById('PrecioTres').value));

	window.alert('El total de la suma es igual a $' + resultado);
}

function Promedio () {
	var resultado = ((parseInt(document.getElementById('PrecioUno').value) + 
		parseInt(document.getElementById('PrecioDos').value) +
		parseInt(document.getElementById('PrecioTres').value)) / 3);

	window.alert('El promedio de la suma es igual a $' + parseInt(resultado));
}

function PrecioFinal () {
	var sinIva = ((parseInt(document.getElementById('PrecioUno').value) + 
		parseInt(document.getElementById('PrecioDos').value) +
		parseInt(document.getElementById('PrecioTres').value)));

	var conIva = sinIva + (sinIva * 21 / 100);

	window.alert('El total de la suma más IVA (21%) es igual a $' + parseInt(conIva));
}