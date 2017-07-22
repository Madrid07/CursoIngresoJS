/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () {
	var fahrenheit = parseInt(document.getElementById('Temperatura').value);
	var conversion = parseInt((fahrenheit - 32) / 1.8);

	window.alert(fahrenheit + ' Fahrenheit son ' + conversion + '° Centígrados');
}

function CentigradosFahrenheit () {
	var centigrados = parseInt(document.getElementById('Temperatura').value);	
	var conversion = parseInt(centigrados * 1.8 + 32);

	window.alert(centigrados + '° Centígrados son ' + conversion + ' Fahrenheit');
}
